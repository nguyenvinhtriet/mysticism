function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export function generatePasscode(name: string, dob: string, type: string): string {
  // Normalize inputs: remove accents, lowercase, remove all non-alphanumeric chars
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanDob = dob.replace(/[^0-9]/g, '');
  const cleanType = type.toLowerCase().trim();
  
  const rawString = `${cleanName}|${cleanDob}|${cleanType}|SECRET_KEY_2026_V2`;
  
  // Simple deterministic hash (djb2)
  let hash = 5381;
  for (let i = 0; i < rawString.length; i++) {
    const char = rawString.charCodeAt(i);
    hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    // Bitwise operations in JS automatically convert to 32-bit signed integers
  }
  
  // Convert to 6 uppercase alphanumeric characters
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let val = Math.abs(hash);
  
  if (val === 0) val = 123456;

  for (let i = 0; i < 6; i++) {
    result += chars[val % 36];
    val = Math.floor(val / 36);
    if (val === 0) {
      val = Math.abs(hash) + (i + 1) * 997; 
    }
  }
  return result;
}
