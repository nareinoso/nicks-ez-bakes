import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
  standalone: true,
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const trimmed = value.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  }
}
