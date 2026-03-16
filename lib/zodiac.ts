export function getZodiacSign(dob: string): { sign: string, element: string, description: string } {
  if (!dob) return { sign: 'Unknown', element: 'Unknown', description: '' };
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: 'Bạch Dương (Aries)', element: 'Lửa', description: 'Nhiệt huyết, tiên phong, dũng cảm.' };
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: 'Kim Ngưu (Taurus)', element: 'Đất', description: 'Kiên định, đáng tin cậy, thích sự ổn định.' };
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return { sign: 'Song Tử (Gemini)', element: 'Khí', description: 'Linh hoạt, giao tiếp tốt, tò mò.' };
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return { sign: 'Cự Giải (Cancer)', element: 'Nước', description: 'Giàu cảm xúc, trực giác tốt, hướng về gia đình.' };
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: 'Sư Tử (Leo)', element: 'Lửa', description: 'Tự tin, sáng tạo, thích tỏa sáng.' };
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: 'Xử Nữ (Virgo)', element: 'Đất', description: 'Tỉ mỉ, thực tế, thích phân tích.' };
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return { sign: 'Thiên Bình (Libra)', element: 'Khí', description: 'Hòa giao, yêu cái đẹp, tìm kiếm sự cân bằng.' };
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return { sign: 'Thiên Yết (Scorpio)', element: 'Nước', description: 'Mãnh liệt, sâu sắc, quyết đoán.' };
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: 'Nhân Mã (Sagittarius)', element: 'Lửa', description: 'Lạc quan, yêu tự do, thích khám phá.' };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: 'Ma Kết (Capricorn)', element: 'Đất', description: 'Có trách nhiệm, kỷ luật, tham vọng.' };
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: 'Bảo Bình (Aquarius)', element: 'Khí', description: 'Độc lập, sáng tạo, mang tư tưởng tiến bộ.' };
  return { sign: 'Song Ngư (Pisces)', element: 'Nước', description: 'Mơ mộng, nhạy cảm, giàu lòng trắc ẩn.' };
}
