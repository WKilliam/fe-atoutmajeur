import {Injectable, Inject, PLATFORM_ID, signal, computed} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SecurityServices {

  private readonly isBrowser = signal<boolean>(false);
  public readonly isHashing = signal<boolean>(false);
  public readonly lastHashResult = signal<string | null>(null);

  private readonly frontendPepper = computed(() => {
    if (this.isBrowser()) {
      return 'static_' + window.location.hostname;
    }
    return 'static_localhost';
  });


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser.set(isPlatformBrowser(this.platformId));
  }

  public async preHash(password: string): Promise<string> {
    if (!this.isBrowser()) {
      throw new Error('preHash can only run in the browser');
    }
    this.isHashing.set(true);
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(password + this.frontendPepper());
      const hash = await window.crypto.subtle.digest('SHA-256', data);

      const hashString = Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      this.lastHashResult.set(hashString);

      return hashString;
    } finally {
      this.isHashing.set(false);
    }
  }

  public clearLastHash(): void {
    this.lastHashResult.set(null);
  }

  public getPepper(): string {
    return this.frontendPepper();
  }

}
