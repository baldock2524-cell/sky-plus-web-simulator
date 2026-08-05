export type AspectMode = '16:9' | '4:3';

export function applyAspectClass(wrapper: HTMLElement, mode: AspectMode) {
  wrapper.classList.remove('aspect-16-9', 'aspect-4-3');
  if (mode === '16:9') wrapper.classList.add('aspect-16-9');
  else wrapper.classList.add('aspect-4-3');
}

/**
 * Toggles the wrapper between 16:9 and 4:3 and returns the new mode.
 */
export function toggleAspect(wrapper: HTMLElement): AspectMode {
  const is16x9 = wrapper.classList.contains('aspect-16-9');
  const newMode: AspectMode = is16x9 ? '4:3' : '16:9';
  applyAspectClass(wrapper, newMode);
  return newMode;
}
