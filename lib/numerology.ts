const letterValues: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9
};

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function reduceNumber(num: number, keepMaster: boolean = true): number {
  if (keepMaster && (num === 11 || num === 22 || num === 33)) return num;
  if (num <= 9) return num;
  const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  return reduceNumber(sum, keepMaster);
}

export function calculateLifePath(dob: string): number {
  if (!dob) return 0;
  const digits = dob.replace(/-/g, '').split('').map(Number);
  const sum = digits.reduce((acc, val) => acc + val, 0);
  return reduceNumber(sum);
}

export function calculateDestiny(name: string): number {
  if (!name) return 0;
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    sum += letterValues[char] || 0;
  }
  return reduceNumber(sum);
}

export function calculateSoulUrge(name: string): number {
  if (!name) return 0;
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    if (vowels.includes(char)) {
      sum += letterValues[char] || 0;
    }
  }
  return reduceNumber(sum);
}

export function calculatePersonality(name: string): number {
  if (!name) return 0;
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    if (!vowels.includes(char)) {
      sum += letterValues[char] || 0;
    }
  }
  return reduceNumber(sum);
}

export function calculateAttitude(dob: string): number {
  if (!dob) return 0;
  const parts = dob.split('-');
  if (parts.length !== 3) return 0;
  const [year, month, day] = parts;
  const sum = day.split('').reduce((acc, val) => acc + parseInt(val), 0) +
              month.split('').reduce((acc, val) => acc + parseInt(val), 0);
  return reduceNumber(sum, false);
}

export function calculateMaturity(lifePath: number, destiny: number): number {
  return reduceNumber(lifePath + destiny);
}

export function calculateBalance(name: string): number {
  if (!name) return 0;
  const words = removeAccents(name).toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
  let sum = 0;
  for (const word of words) {
    if (word.length > 0) {
      sum += letterValues[word[0]] || 0;
    }
  }
  return reduceNumber(sum);
}

export function calculateHiddenPassion(name: string): number {
  if (!name) return 0;
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z]/g, '');
  const counts: Record<number, number> = {};
  for (const char of cleanName) {
    const val = letterValues[char];
    if (val) counts[val] = (counts[val] || 0) + 1;
  }
  let maxCount = 0;
  let hiddenPassion = 0;
  for (const [val, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      hiddenPassion = parseInt(val);
    }
  }
  return hiddenPassion;
}

export function calculateRationalThought(name: string, dob: string): number {
  if (!name || !dob) return 0;
  const words = removeAccents(name).toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
  const firstName = words[0] || '';
  const firstLetterVal = firstName.length > 0 ? letterValues[firstName[0]] || 0 : 0;
  
  const parts = dob.split('-');
  if (parts.length !== 3) return 0;
  const day = parts[2];
  const daySum = day.split('').reduce((acc, val) => acc + parseInt(val), 0);
  
  return reduceNumber(firstLetterVal + daySum);
}

export function calculateApproach(name: string): number {
  if (!name) return 0;
  const cleanName = removeAccents(name).toLowerCase().replace(/[^a-z]/g, '');
  for (const char of cleanName) {
    if (vowels.includes(char)) {
      return letterValues[char] || 0;
    }
  }
  return 0;
}

export function calculatePersonalYear(dob: string, currentYear: number = new Date().getFullYear()): number {
  if (!dob) return 0;
  const parts = dob.split('-');
  if (parts.length !== 3) return 0;
  const [, month, day] = parts;
  const sum = day.split('').reduce((acc, val) => acc + parseInt(val), 0) +
              month.split('').reduce((acc, val) => acc + parseInt(val), 0) +
              currentYear.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
  return reduceNumber(sum, false);
}

export function calculatePersonalMonth(personalYear: number, currentMonth: number = new Date().getMonth() + 1): number {
  return reduceNumber(personalYear + currentMonth, false);
}

export function calculatePinnacles(dob: string) {
  if (!dob) return null;
  const parts = dob.split('-');
  if (parts.length !== 3) return null;
  const [yearStr, monthStr, dayStr] = parts;
  
  const month = reduceNumber(parseInt(monthStr), false);
  const day = reduceNumber(parseInt(dayStr), false);
  const year = reduceNumber(parseInt(yearStr), false);
  
  const peak1 = reduceNumber(month + day, false);
  const peak2 = reduceNumber(day + year, false);
  const peak3 = reduceNumber(peak1 + peak2, false);
  const peak4 = reduceNumber(month + year, false);
  
  const challenge1 = Math.abs(month - day);
  const challenge2 = Math.abs(day - year);
  const challenge3 = Math.abs(challenge1 - challenge2);
  const challenge4 = Math.abs(month - year);
  
  const lifePath = calculateLifePath(dob);
  const age1 = 36 - lifePath;
  const year1 = parseInt(yearStr) + age1;
  
  return {
    peaks: [peak1, peak2, peak3, peak4],
    challenges: [challenge1, challenge2, challenge3, challenge4],
    ages: [age1, age1 + 9, age1 + 18, age1 + 27],
    years: [year1, year1 + 9, year1 + 18, year1 + 27]
  };
}
