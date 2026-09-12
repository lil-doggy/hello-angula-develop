import {queue} from 'rxjs';

queueimport {
  Component,
  computed,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Developer } from '../../model/domain/developer';

@Component({
  imports: [FormsModule],
  selector: 'app-developer-registration',
  styleUrl: './developer-registration.css',
  templateUrl: './developer-registration.html',
})
export class DeveloperRegistration {
  static readonly EMPTY_NAME = '';

  protected firstName: WritableSignal<string> = signal<string>(
    DeveloperRegistration.EMPTY_NAME
  );

  protected lastName: WritableSignal<string> = signal<string>(
    DeveloperRegistration.EMPTY_NAME
  );

  protected isValid = computed(() =>
    Developer.isValidForRegistration(
      this.firstName(),
      this.lastName()
    )
  );

  protected isFirstNameValid = computed(() =>
    Developer.isValidName(this.firstName())
  );

  protected isLastNameValid = computed(() =>
    Developer.isValidName(this.lastName())
  );

  public developerRegistered: OutputEmitterRef<Developer> =
    output<Developer>();

  public registrationDeferred: OutputEmitterRef<void> =
    output<void>();

  protected submitRegistrationRequest(): void {
    if (this.isValid()) {
      const developer = new Developer(
        this.firstName(),
        this.lastName()
      );

      this.developerRegistered.emit(developer);
    }
  }

  protected deferRegistrationRequest(): void {
    this.clearFields();
    this.registrationDeferred.emit();
  }

  protected clearFields(): void {
    this.firstName.set(DeveloperRegistration.EMPTY_NAME);
    this.lastName.set(DeveloperRegistration.EMPTY_NAME);
  }
}

