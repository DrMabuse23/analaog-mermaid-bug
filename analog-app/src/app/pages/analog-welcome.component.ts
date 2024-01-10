import { Component } from '@angular/core';

@Component({
  selector: 'analog-app-analog-welcome',
  standalone: true,
  host: {
    class:
      'flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32',
  },
  template: `
    <main class="flex-1 mx-auto">
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="flex max-w-[64rem] flex-col items-center gap-4 text-center">

          <div class="space-x-4">
            <a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-zinc-950 text-zinc-50 hover:bg-zinc-950/90 h-11 px-8 rounded-md"
              href="./docs/about"
              >Go to Markdpwn file</a
            >
          </div>
        </div>
      </section>
    </main>
  `,
})
export class AnalogWelcomeComponent {
  public count = 0;
  public increment() {
    this.count++;
  }
}
