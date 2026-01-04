/**
 * Valida si una cadena es palíndroma.
 * Normaliza quitando caracteres no alfanuméricos y comparando con su reverso.
 * @param s - Cadena a evaluar.
 * @returns `true` si la cadena es palíndroma, `false` en caso contrario.
 */
export function isPalindrome(s: string): boolean {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  return normalized === normalized.split('').reverse().join('');
}

/**
 * Imprime en consola si la frase es palíndroma.
 * No devuelve ningún valor (void).
 * @param s - Cadena a evaluar e imprimir.
 */
export function printIsPalindrome(s: string): void {
  const result = isPalindrome(s);
  if (result) {
    console.log(`La frase "${s}" es palíndroma`);
  } else {
    console.log(`La frase "${s}" no es palíndroma`);
  }
}
