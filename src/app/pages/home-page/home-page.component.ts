import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-page',
  standalone: true, // Tornando o componente standalone
  imports: [FormsModule], // Incluindo o FormsModule aqui
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  index: number = 0;
  interval: any;
  name: string = '';
  email: string = '';
  message: string = '';

  ngAfterViewInit(): void {
    this.updateCarousel();

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton?.addEventListener('click', () => this.showPrevItem());
    nextButton?.addEventListener('click', () => this.showNextItem());

    this.startAutoCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  updateCarousel(): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, idx) => {
      if (idx === this.index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  showPrevItem(): void {
    const items = document.querySelectorAll('.carousel-item');
    this.index = (this.index - 1 + items.length) % items.length;
    this.updateCarousel();
    this.restartAutoCarousel(); 
  }

  showNextItem(): void {
    const items = document.querySelectorAll('.carousel-item');
    this.index = (this.index + 1) % items.length;
    this.updateCarousel();
    this.restartAutoCarousel(); 
  }

  startAutoCarousel(): void {
    this.interval = setInterval(() => {
      this.showNextItem();
    }, 15000); 
  }

  restartAutoCarousel(): void {
    clearInterval(this.interval);
    this.startAutoCarousel();
  }

  public sendEmail(e: SubmitEvent): void {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    emailjs.sendForm(
      'service_cv4z80m', // Seu Service ID
      'template_qyd7d3h', // Seu Template ID
      e.target as HTMLFormElement, // O próprio formulário
      '5fuW9pL_ZMY0XKtOh' // Seu User ID
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response);
        alert('Mensagem enviada com sucesso!');
      },
      (error: EmailJSResponseStatus) => {
        console.error('FAILED...', error.text);
        alert('Erro ao enviar mensagem. Tente novamente!');
      }
    );
  }
}
