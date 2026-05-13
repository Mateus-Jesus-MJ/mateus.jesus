import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = false;
  showModal = false;
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';

  async onSubmit() {
    this.isSending = true;
    this.statusMessage = 'Enviando sua mensagem...';
    this.statusType = '';

    const templateParams = {
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      subject: this.contactData.subject,
      message: this.contactData.message,
      to_email: 'contato@mateusjesus.dev'
    };

    try {
      await emailjs.send(
        'service_9xx6n1j', 
        'template_lyviuvc', 
        templateParams,
        'IH9gTvTFn5WiYWemE'
      );

      this.statusMessage = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
      this.statusType = 'success';
      this.showModal = true;
      this.resetForm();
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      this.statusMessage = 'Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.';
      this.statusType = 'error';
      this.showModal = true;
    } finally {
      this.isSending = false;
    }
  }

  closeModal() {
    this.showModal = false;
    if (this.statusType === 'success') {
      this.statusMessage = '';
      this.statusType = '';
    }
  }

  private resetForm() {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
