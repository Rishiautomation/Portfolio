import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private revealObserver!: IntersectionObserver;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    this.observeReveals();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.observeReveals();
      }
    });
  }

  private observeReveals() {
    document.querySelectorAll('.reveal').forEach((element) => {
      if (!element.classList.contains('visible')) {
        this.revealObserver.observe(element);
      }
    });
  }
}
