export function getPersonalityInterpretation(number: number) {
  if (number === 11) {
    return {
      aura: "Khi bước vào một căn phòng, người mang Nhân cách 11 tỏa ra một trường năng lượng của sự tĩnh lặng huyền bí, tựa như mặt hồ thu phản chiếu ánh trăng. Họ không ồn ào hay cố gắng thu hút sự chú ý, nhưng lại sở hữu một sức hút vô hình khiến người khác bất giác ngoái nhìn. Ấn tượng đầu tiên họ gieo vào tiềm thức người đối diện là sự thanh tao, sâu sắc và một trực giác dường như có thể thấu thị mọi tầng vỉa của tâm hồn.",
      magnet: "Mọi người bị thu hút bởi họ không phải vì những lời lẽ hoa mỹ, mà bởi khả năng lắng nghe bằng cả linh hồn. Cách họ hiện diện trong một cuộc trò chuyện tạo ra một không gian an toàn tuyệt đối, nơi những người xung quanh cảm thấy được thấu hiểu mà không cần phải phán xét. Đôi mắt và phong thái của họ phát ra tần số của sự chữa lành, khiến người khác tự nhiên muốn trút bỏ lớp áo giáp phòng thủ để bộc bạch những góc khuất sâu kín nhất.",
      illusion: "Chiếc mặt nạ của sự thấu cảm và trí tuệ tâm linh này đôi khi trở thành một gánh nặng. Người đời thường gán mác họ là những \"nhà hiền triết\" luôn có sẵn câu trả lời, hoặc kỳ vọng họ phải luôn mạnh mẽ, bao dung để gánh vác cảm xúc của người khác. Khoảng cách giữa một vỏ bọc tĩnh tại và một nội tâm cuộn trào những luồng sóng cảm xúc mãnh liệt khiến họ thường xuyên cảm thấy lạc lõng. Áp lực phải duy trì hình ảnh \"người chữa lành\" đôi khi vắt kiệt năng lượng sống của chính họ.",
      advice: "Để chiếc mặt nạ Nhân cách 11 trở thành công cụ kết nối thay vì gông cùm, bạn cần học nghệ thuật \"thấu cảm có ranh giới\". Hãy hiểu rằng bạn là tấm gương phản chiếu ánh sáng, chứ không phải là ngọn lửa phải tự đốt cháy mình để sưởi ấm người khác. Cho phép bản thân được yếu đuối, được từ chối tiếp nhận những năng lượng độc hại. Khi bạn biết cách bảo vệ tần số rung động của chính mình, lớp vỏ bọc này sẽ trở thành một lăng kính tuyệt đẹp, giúp bạn truyền dẫn trí tuệ vũ trụ vào đời sống thực tại một cách nhẹ nhàng và trọn vẹn nhất."
    };
  }
  
  // Fallback for other numbers
  return {
    aura: `Mang năng lượng của số ${number}, khí chất bề ngoài của bạn tỏa ra sự đặc trưng riêng biệt. Ấn tượng đầu tiên bạn để lại thường rất rõ nét và mang đậm dấu ấn cá nhân.`,
    magnet: "Mọi người bị thu hút bởi cách bạn thể hiện bản thân và tương tác với thế giới xung quanh. Phong cách giao tiếp của bạn tạo ra một điểm tựa nhất định cho những người tiếp xúc.",
    illusion: "Tuy nhiên, vẻ bề ngoài này đôi khi che giấu những suy nghĩ và cảm xúc phức tạp bên trong. Người khác có thể đánh giá bạn chỉ qua lăng kính của chiếc mặt nạ xã hội này, tạo ra những kỳ vọng không hoàn toàn khớp với con người thật của bạn.",
    advice: "Hãy học cách dung hòa giữa hình ảnh bạn thể hiện ra bên ngoài và giá trị cốt lõi bên trong. Sử dụng vỏ bọc này như một cầu nối linh hoạt thay vì một rào cản, cho phép những người thực sự quan trọng được nhìn thấy chiều sâu chân thật của bạn."
  };
}

export function getPinnacleMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Giai đoạn của sự khởi đầu mới, tự lập và khẳng định bản thân. Cơ hội để bạn trở thành người dẫn đầu và tiên phong.",
    2: "Giai đoạn của sự hợp tác, kiên nhẫn và xây dựng các mối quan hệ. Trực giác và sự tinh tế sẽ giúp bạn thành công.",
    3: "Giai đoạn của sự sáng tạo, thể hiện bản thân và niềm vui. Bạn sẽ có nhiều cơ hội để giao tiếp và tỏa sáng.",
    4: "Giai đoạn của sự chăm chỉ, xây dựng nền tảng vững chắc và thực tế. Đòi hỏi sự kỷ luật và tổ chức cao.",
    5: "Giai đoạn của sự thay đổi, tự do và những trải nghiệm mới. Cơ hội để phiêu lưu và mở rộng tầm nhìn.",
    6: "Giai đoạn của trách nhiệm gia đình, tình yêu thương và sự chăm sóc. Tập trung vào việc xây dựng tổ ấm và cộng đồng.",
    7: "Giai đoạn của sự phát triển tâm linh, học hỏi và chiêm nghiệm. Thời gian để quay vào bên trong và tìm kiếm chân lý.",
    8: "Giai đoạn của thành tựu vật chất, quyền lực và tài chính. Cơ hội để đạt được những thành công lớn trong sự nghiệp.",
    9: "Giai đoạn của sự hoàn thiện, lòng vị tha và kết thúc một chu kỳ. Thời điểm để cho đi và phục vụ nhân loại.",
    11: "Giai đoạn của sự thức tỉnh tâm linh mạnh mẽ, trực giác nhạy bén và truyền cảm hứng cho người khác.",
    22: "Giai đoạn của việc biến những giấc mơ lớn thành hiện thực, xây dựng những công trình mang tính vĩ mô và để lại di sản."
  };
  return meanings[number] || "Giai đoạn mang năng lượng đặc biệt, đòi hỏi sự tập trung và phát triển bản thân.";
}

export function getChallengeMeaning(number: number) {
  const meanings: Record<number, string> = {
    0: "Thử thách của sự lựa chọn. Bạn có quyền tự do quyết định hướng đi, nhưng cũng phải tự chịu trách nhiệm hoàn toàn.",
    1: "Thử thách về sự tự tin và độc lập. Bạn cần vượt qua sự phụ thuộc và học cách đứng trên đôi chân của mình.",
    2: "Thử thách về sự nhạy cảm và hợp tác. Tránh việc quá nhạy cảm hoặc để người khác lợi dụng lòng tốt của bạn.",
    3: "Thử thách về sự phân tán năng lượng và giao tiếp. Cần tập trung vào mục tiêu và tránh việc nói quá nhiều hoặc hời hợt.",
    4: "Thử thách về sự cứng nhắc và lười biếng. Cần vượt qua sự bảo thủ và học cách làm việc có kỷ luật, linh hoạt hơn.",
    5: "Thử thách về sự bốc đồng và thiếu ổn định. Cần kiểm soát sự khao khát tự do quá mức và học cách cam kết.",
    6: "Thử thách về sự áp đặt và lo lắng thái quá. Tránh việc can thiệp quá sâu vào cuộc sống của người khác và học cách buông bỏ.",
    7: "Thử thách về sự cô lập và kiêu ngạo. Cần mở lòng hơn với mọi người và tránh việc tự nhốt mình trong thế giới riêng.",
    8: "Thử thách về vật chất và quyền lực. Tránh việc quá tham vọng, thực dụng hoặc lạm dụng quyền lực.",
    9: "Thử thách về cảm xúc và sự gắn kết. Cần học cách tha thứ, buông bỏ quá khứ và không bi lụy."
  };
  return meanings[number] || "Thử thách đòi hỏi bạn phải nỗ lực vượt qua giới hạn của bản thân.";
}

export function getDevelopmentMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Phát triển khả năng lãnh đạo, sự tự tin và tinh thần tiên phong. Dám nghĩ dám làm.",
    2: "Phát triển sự tinh tế, khả năng lắng nghe và nghệ thuật hòa giải. Xây dựng sự hòa hợp.",
    3: "Phát triển khả năng diễn đạt, sự sáng tạo và tinh thần lạc quan. Truyền cảm hứng cho người khác.",
    4: "Phát triển tính kỷ luật, khả năng tổ chức và sự kiên trì. Xây dựng nền tảng vững chắc.",
    5: "Phát triển sự linh hoạt, khả năng thích nghi và tinh thần phiêu lưu. Sẵn sàng đón nhận sự thay đổi.",
    6: "Phát triển tình yêu thương, trách nhiệm và khả năng chăm sóc. Xây dựng môi trường ấm áp.",
    7: "Phát triển trí tuệ, trực giác và sự hiểu biết sâu sắc. Khám phá những chân lý ẩn giấu.",
    8: "Phát triển khả năng quản lý, tư duy kinh doanh và sự độc lập tài chính. Đạt được thành tựu thực tế.",
    9: "Phát triển lòng vị tha, tầm nhìn rộng lớn và khả năng buông bỏ. Phụng sự cộng đồng.",
    11: "Phát triển trực giác tâm linh, khả năng thấu cảm và truyền cảm hứng sâu sắc.",
    22: "Phát triển tầm nhìn vĩ mô, khả năng kiến tạo và xây dựng những giá trị bền vững."
  };
  return meanings[number] || "Phát triển những tiềm năng tiềm ẩn bên trong bạn.";
}

export function getPersonalYearMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Năm của sự khởi đầu mới, gieo hạt và thiết lập mục tiêu. Đây là lúc để bạn hành động độc lập, tự tin bước đi trên con đường mới. Những gì bạn bắt đầu trong năm nay sẽ ảnh hưởng đến cả chu kỳ 9 năm tiếp theo.",
    2: "Năm của sự hợp tác, chờ đợi và phát triển các mối quan hệ. Hạt giống bạn gieo năm ngoái đang nảy mầm dưới lòng đất. Hãy kiên nhẫn, lắng nghe trực giác và tập trung vào sự hòa hợp thay vì cố gắng ép buộc mọi thứ diễn ra nhanh chóng.",
    3: "Năm của sự mở rộng, giao tiếp và thể hiện bản thân. Hạt giống đã vươn lên khỏi mặt đất. Đây là thời điểm tuyệt vời để sáng tạo, kết nối xã hội, tận hưởng niềm vui và chia sẻ ý tưởng của bạn với thế giới.",
    4: "Năm của sự củng cố, làm việc chăm chỉ và xây dựng nền tảng. Cây cần được chăm sóc và cắt tỉa. Hãy tập trung vào tính kỷ luật, tổ chức lại cuộc sống, tài chính và công việc. Đây không phải là năm để mạo hiểm mà là để tạo sự ổn định.",
    5: "Năm của sự thay đổi, tự do và những trải nghiệm mới. Cây ra hoa và thu hút sự chú ý. Bạn sẽ cảm thấy khao khát sự mới mẻ, muốn đi du lịch, thay đổi công việc hoặc môi trường sống. Hãy linh hoạt và sẵn sàng đón nhận những cơ hội bất ngờ.",
    6: "Năm của trách nhiệm, gia đình và tình yêu thương. Cây bắt đầu kết trái. Trọng tâm của bạn sẽ hướng về tổ ấm, người thân và các mối quan hệ gần gũi. Đây là lúc để chăm sóc, nuôi dưỡng và giải quyết các vấn đề gia đình.",
    7: "Năm của sự chiêm nghiệm, học hỏi và phát triển tâm linh. Cây cần thời gian nghỉ ngơi để tích lũy dưỡng chất. Hãy dành thời gian cho bản thân, quay vào bên trong, phân tích và đánh giá lại cuộc sống. Tránh đưa ra những quyết định vật chất lớn trong năm nay.",
    8: "Năm của sự gặt hái, thành tựu vật chất và quyền lực. Đây là mùa thu hoạch những gì bạn đã gieo trồng và chăm sóc trong 7 năm qua. Cơ hội thăng tiến, thành công tài chính và sự công nhận đang chờ đón bạn nếu bạn đã nỗ lực hết mình.",
    9: "Năm của sự kết thúc, dọn dẹp và lòng vị tha. Mùa đông đến, cây rụng lá để chuẩn bị cho một chu kỳ mới. Hãy buông bỏ những gì không còn phục vụ bạn (thói quen, mối quan hệ, công việc cũ), tha thứ và dọn dẹp không gian sống để đón nhận những điều mới mẻ vào năm sau."
  };
  return meanings[number] || "Năm mang năng lượng đặc biệt, đánh dấu một giai đoạn quan trọng trong cuộc đời bạn.";
}

export function getPersonalMonthMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Tháng để bắt đầu dự án mới, đưa ra quyết định quan trọng và hành động độc lập.",
    2: "Tháng để hợp tác, ngoại giao, kiên nhẫn chờ đợi và chăm sóc các mối quan hệ.",
    3: "Tháng của sự vui vẻ, giao tiếp, sáng tạo và thể hiện bản thân. Hãy tận hưởng cuộc sống.",
    4: "Tháng để làm việc chăm chỉ, tổ chức lại mọi thứ, giải quyết các vấn đề thực tế và tài chính.",
    5: "Tháng của sự thay đổi, linh hoạt, những chuyến đi và những trải nghiệm bất ngờ.",
    6: "Tháng tập trung vào gia đình, người thân, tình yêu và những trách nhiệm trong tổ ấm.",
    7: "Tháng để nghỉ ngơi, chiêm nghiệm, học hỏi, nghiên cứu và phát triển đời sống nội tâm.",
    8: "Tháng của công việc, kinh doanh, tài chính và gặt hái những thành quả vật chất.",
    9: "Tháng để hoàn thành, kết thúc những việc dang dở, buông bỏ và dọn dẹp để chuẩn bị cho chu kỳ mới."
  };
  return meanings[number] || "Tháng mang năng lượng đặc biệt.";
}

export function getGeneralAdvice(number: number) {
  const advice: Record<number, { do: string, dont: string }> = {
    1: {
      do: "Tự tin, quyết đoán, tiên phong, độc lập, tập trung vào mục tiêu cá nhân, rèn luyện kỹ năng lãnh đạo.",
      dont: "Dựa dẫm vào người khác, chần chừ, thiếu quyết đoán, độc đoán, bảo thủ, áp đặt ý kiến lên người khác."
    },
    2: {
      do: "Lắng nghe, thấu cảm, hợp tác, hòa giải, kiên nhẫn, chú ý đến chi tiết, phát triển trực giác.",
      dont: "Quá nhạy cảm, dễ bị tổn thương, ba phải, thiếu chính kiến, để người khác lợi dụng lòng tốt."
    },
    3: {
      do: "Sáng tạo, giao tiếp, lạc quan, truyền cảm hứng, thể hiện bản thân qua nghệ thuật, ngôn từ.",
      dont: "Nói quá nhiều, hời hợt, phân tán năng lượng, phóng đại sự thật, thiếu tập trung vào mục tiêu."
    },
    4: {
      do: "Kỷ luật, chăm chỉ, tổ chức, lập kế hoạch, xây dựng nền tảng vững chắc, chú trọng thực tế.",
      dont: "Cứng nhắc, bảo thủ, lười biếng, làm việc thiếu kế hoạch, quá tham công tiếc việc đến mức bỏ bê bản thân."
    },
    5: {
      do: "Linh hoạt, thích nghi, trải nghiệm cái mới, đi du lịch, mở rộng mạng lưới quan hệ, nắm bắt cơ hội.",
      dont: "Bốc đồng, cả thèm chóng chán, thiếu cam kết, sa đà vào các thú vui tiêu cực, vô trách nhiệm."
    },
    6: {
      do: "Yêu thương, chăm sóc, gánh vác trách nhiệm gia đình, tạo sự hòa hợp, tư vấn, giúp đỡ người khác.",
      dont: "Bao đồng, can thiệp quá sâu vào đời sống người khác, áp đặt tình yêu thương, quên mất việc chăm sóc bản thân."
    },
    7: {
      do: "Học hỏi, nghiên cứu, chiêm nghiệm, phát triển tâm linh, dành thời gian ở một mình, tìm kiếm chân lý.",
      dont: "Cô lập bản thân quá mức, đa nghi, lạnh lùng, xa lánh thực tế, kiêu ngạo về trí tuệ."
    },
    8: {
      do: "Quản lý tài chính, kinh doanh, thiết lập mục tiêu lớn, thể hiện quyền lực, làm việc chuyên nghiệp.",
      dont: "Quá thực dụng, tham lam, lạm dụng quyền lực, coi trọng vật chất hơn tình cảm, độc tài."
    },
    9: {
      do: "Vị tha, bao dung, phụng sự cộng đồng, hoàn thiện bản thân, buông bỏ quá khứ, truyền cảm hứng.",
      dont: "Bi lụy, ôm đồm quá khứ, ảo tưởng, thiếu thực tế, hy sinh bản thân một cách mù quáng."
    },
    11: {
      do: "Lắng nghe trực giác, phát triển tâm linh, truyền cảm hứng, thấu cảm, giữ gìn sự cân bằng nội tâm.",
      dont: "Căng thẳng thần kinh, ảo tưởng sức mạnh, nhạy cảm thái quá, áp đặt niềm tin lên người khác."
    },
    22: {
      do: "Xây dựng những dự án lớn, biến ước mơ thành hiện thực, tư duy vĩ mô, làm việc có hệ thống.",
      dont: "Sợ hãi thất bại, áp lực quá mức, tham vọng mù quáng, thao túng người khác để đạt mục đích."
    },
    33: {
      do: "Lan tỏa tình yêu thương vô điều kiện, chữa lành, hướng dẫn, trở thành tấm gương sáng.",
      dont: "Gánh vác quá nhiều nỗi đau của người khác, hy sinh đến mức kiệt quệ, tự cho mình là đấng cứu thế."
    }
  };
  
  return advice[number] || {
    do: "Phát huy những điểm mạnh tự nhiên của bạn, sống chân thật với bản thân và không ngừng học hỏi.",
    dont: "Để những nỗi sợ hãi và giới hạn cản bước bạn, chối bỏ những bài học mà cuộc sống mang lại."
  };
}
