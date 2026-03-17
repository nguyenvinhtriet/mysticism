export function getPersonalityInterpretation(number: number) {
  const interpretations: Record<number, { aura: string, magnet: string, illusion: string, advice: string }> = {
    1: {
      aura: "Bạn tỏa ra năng lượng của sự tự tin, độc lập và tiên phong. Ấn tượng đầu tiên bạn để lại là một người mạnh mẽ, quyết đoán và có khả năng kiểm soát tình hình. Phong thái của bạn thường toát lên sự năng động, dám nghĩ dám làm và không ngại thử thách.",
      magnet: "Mọi người bị thu hút bởi sự dứt khoát và khả năng lãnh đạo tự nhiên của bạn. Họ cảm thấy an tâm khi ở cạnh một người biết rõ mình muốn gì và sẵn sàng hành động để đạt được điều đó. Sự nhiệt huyết và tinh thần không bỏ cuộc của bạn truyền cảm hứng mạnh mẽ cho những người xung quanh.",
      illusion: "Tuy nhiên, vẻ ngoài mạnh mẽ này đôi khi khiến người khác nghĩ bạn là người độc đoán, bảo thủ hoặc thiếu lắng nghe. Họ có thể e ngại việc đóng góp ý kiến vì sợ bị bạn gạt đi. Sự độc lập quá mức cũng có thể tạo ra khoảng cách, khiến người khác cảm thấy bạn không cần đến sự giúp đỡ hay đồng hành của họ.",
      advice: "Hãy học cách làm mềm mại hình ảnh của mình bằng việc lắng nghe nhiều hơn và thể hiện sự tôn trọng đối với ý kiến của người khác. Sự tự tin thực sự không nằm ở việc áp đặt, mà ở khả năng dung hòa và dẫn dắt mọi người cùng tiến lên. Đừng ngại thể hiện những khoảnh khắc yếu đuối, vì điều đó sẽ giúp bạn trở nên gần gũi và chân thực hơn."
    },
    2: {
      aura: "Bạn mang đến cảm giác bình yên, nhẹ nhàng và dễ gần. Ấn tượng đầu tiên bạn để lại là một người tinh tế, biết lắng nghe và luôn quan tâm đến cảm xúc của người khác. Phong thái của bạn thường toát lên sự khiêm tốn, hòa nhã và mong muốn tạo ra sự hòa hợp.",
      magnet: "Mọi người bị thu hút bởi sự ấm áp và khả năng thấu cảm sâu sắc của bạn. Họ cảm thấy thoải mái khi chia sẻ câu chuyện của mình vì biết rằng bạn sẽ lắng nghe mà không phán xét. Sự tinh tế trong cách cư xử giúp bạn dễ dàng kết nối và tạo dựng niềm tin với những người xung quanh.",
      illusion: "Tuy nhiên, vẻ ngoài hiền hòa này đôi khi khiến người khác nghĩ bạn là người ba phải, thiếu chính kiến hoặc dễ bị lợi dụng. Họ có thể cho rằng bạn không đủ mạnh mẽ để đưa ra những quyết định khó khăn hoặc bảo vệ quan điểm của mình. Sự nhường nhịn quá mức cũng có thể khiến bạn bị lu mờ trong một tập thể.",
      advice: "Hãy học cách thiết lập ranh giới cá nhân và mạnh dạn nói 'không' khi cần thiết. Sự hòa hợp không có nghĩa là phải hy sinh giá trị của bản thân. Hãy sử dụng sự tinh tế của mình để giao tiếp một cách khéo léo nhưng vẫn kiên định với những gì bạn cho là đúng. Đừng ngại thể hiện sức mạnh nội tâm của mình."
    },
    3: {
      aura: "Bạn tỏa ra năng lượng của sự vui vẻ, lạc quan và sáng tạo. Ấn tượng đầu tiên bạn để lại là một người hoạt ngôn, duyên dáng và luôn tràn đầy sức sống. Phong thái của bạn thường toát lên sự nhiệt huyết, thích giao lưu và khả năng làm trung tâm của sự chú ý.",
      magnet: "Mọi người bị thu hút bởi khiếu hài hước, sự duyên dáng và khả năng truyền cảm hứng của bạn. Bạn mang lại tiếng cười và năng lượng tích cực cho bất kỳ nơi nào bạn đến. Sự sáng tạo và cách diễn đạt độc đáo của bạn khiến những cuộc trò chuyện trở nên thú vị và đáng nhớ.",
      illusion: "Tuy nhiên, vẻ ngoài vui vẻ này đôi khi khiến người khác nghĩ bạn là người hời hợt, thiếu nghiêm túc hoặc dễ phân tâm. Họ có thể nghi ngờ khả năng cam kết và hoàn thành công việc của bạn. Sự hoạt ngôn quá mức cũng có thể khiến người khác cảm thấy bạn nói nhiều hơn làm hoặc phóng đại sự thật.",
      advice: "Hãy học cách cân bằng giữa sự vui vẻ và tính kỷ luật. Sử dụng khả năng giao tiếp của mình để truyền tải những thông điệp có chiều sâu và ý nghĩa. Đừng để năng lượng bị phân tán vào quá nhiều thứ; hãy tập trung vào những mục tiêu quan trọng và chứng minh năng lực của mình qua những kết quả thực tế."
    },
    4: {
      aura: "Bạn mang đến cảm giác vững chãi, đáng tin cậy và thực tế. Ấn tượng đầu tiên bạn để lại là một người nghiêm túc, có kỷ luật và luôn làm việc có kế hoạch. Phong thái của bạn thường toát lên sự cẩn trọng, tỉ mỉ và trách nhiệm cao.",
      magnet: "Mọi người bị thu hút bởi sự ổn định và khả năng tổ chức của bạn. Họ cảm thấy an tâm khi giao việc cho bạn vì biết rằng bạn sẽ hoàn thành nó một cách trọn vẹn và đúng hạn. Sự chân thành, thẳng thắn và tính thực tế của bạn tạo ra một nền tảng vững chắc cho các mối quan hệ.",
      illusion: "Tuy nhiên, vẻ ngoài nghiêm túc này đôi khi khiến người khác nghĩ bạn là người cứng nhắc, bảo thủ hoặc nhàm chán. Họ có thể cảm thấy bạn quá chú trọng vào tiểu tiết mà bỏ lỡ bức tranh toàn cảnh, hoặc thiếu sự linh hoạt để thích ứng với những thay đổi bất ngờ. Sự cẩn trọng quá mức cũng có thể bị hiểu lầm là sự thiếu tự tin.",
      advice: "Hãy học cách cởi mở hơn với những ý tưởng mới và cho phép bản thân được linh hoạt trong cách giải quyết vấn đề. Sự ổn định là tốt, nhưng đừng để nó trở thành rào cản ngăn bạn khám phá những cơ hội mới. Hãy thêm một chút sự hài hước và nhẹ nhàng vào cuộc sống để làm mềm mại hình ảnh của mình."
    },
    5: {
      aura: "Bạn tỏa ra năng lượng của sự tự do, phóng khoáng và phiêu lưu. Ấn tượng đầu tiên bạn để lại là một người năng động, linh hoạt và luôn sẵn sàng trải nghiệm những điều mới mẻ. Phong thái của bạn thường toát lên sự cuốn hút, bí ẩn và không thích bị ràng buộc.",
      magnet: "Mọi người bị thu hút bởi sự thú vị, đa tài và khả năng thích ứng nhanh chóng của bạn. Bạn mang lại làn gió mới và sự phấn khích cho những người xung quanh. Sự cởi mở và tinh thần không ngại rủi ro của bạn truyền cảm hứng cho người khác bước ra khỏi vùng an toàn của họ.",
      illusion: "Tuy nhiên, vẻ ngoài phóng khoáng này đôi khi khiến người khác nghĩ bạn là người thiếu cam kết, cả thèm chóng chán hoặc vô trách nhiệm. Họ có thể e ngại việc xây dựng mối quan hệ lâu dài với bạn vì sợ bạn sẽ rời đi khi tìm thấy điều gì đó thú vị hơn. Sự linh hoạt quá mức cũng có thể bị hiểu lầm là sự thiếu định hướng.",
      advice: "Hãy học cách tìm thấy sự tự do trong khuôn khổ và rèn luyện tính kỷ luật để hoàn thành những gì bạn đã bắt đầu. Sự trải nghiệm là cần thiết, nhưng sự cam kết mới tạo ra những giá trị bền vững. Hãy sử dụng sự linh hoạt của mình để giải quyết vấn đề một cách sáng tạo, đồng thời xây dựng niềm tin với người khác qua những hành động nhất quán."
    },
    6: {
      aura: "Bạn mang đến cảm giác ấm áp, che chở và đầy tình yêu thương. Ấn tượng đầu tiên bạn để lại là một người có trách nhiệm, chu đáo và luôn quan tâm đến gia đình, cộng đồng. Phong thái của bạn thường toát lên sự dịu dàng, bao dung và mong muốn chăm sóc người khác.",
      magnet: "Mọi người bị thu hút bởi sự chân thành, lòng nhân ái và khả năng tạo ra một môi trường an toàn, hòa hợp của bạn. Họ tìm đến bạn để được an ủi, tư vấn và nhận được sự hỗ trợ về mặt tinh thần. Sự tận tâm và tinh thần trách nhiệm của bạn khiến người khác cảm thấy được trân trọng và yêu thương.",
      illusion: "Tuy nhiên, vẻ ngoài chu đáo này đôi khi khiến người khác nghĩ bạn là người bao đồng, thích kiểm soát hoặc can thiệp quá sâu vào đời sống cá nhân của họ. Họ có thể cảm thấy ngột ngạt trước sự quan tâm thái quá của bạn. Sự hy sinh quá mức cũng có thể khiến bạn bị lợi dụng hoặc bỏ bê chính bản thân mình.",
      advice: "Hãy học cách yêu thương không sở hữu và tôn trọng ranh giới cá nhân của người khác. Sự chăm sóc tốt nhất đôi khi là để họ tự trải nghiệm và trưởng thành. Đừng quên dành thời gian và năng lượng để chăm sóc chính bản thân mình, vì bạn chỉ có thể mang lại hạnh phúc cho người khác khi bạn thực sự hạnh phúc."
    },
    7: {
      aura: "Bạn tỏa ra năng lượng của sự thông thái, bí ẩn và chiều sâu nội tâm. Ấn tượng đầu tiên bạn để lại là một người điềm tĩnh, quan sát sắc bén và có phần khép kín. Phong thái của bạn thường toát lên sự độc lập trong tư duy, trí tuệ và khao khát tìm kiếm chân lý.",
      magnet: "Mọi người bị thu hút bởi sự sâu sắc, kiến thức uyên thâm và khả năng phân tích vấn đề một cách thấu đáo của bạn. Họ tìm đến bạn để có những lời khuyên khách quan và những góc nhìn mới mẻ. Sự tĩnh lặng và phong thái đĩnh đạc của bạn tạo ra một sức hút đầy bí ẩn.",
      illusion: "Tuy nhiên, vẻ ngoài khép kín này đôi khi khiến người khác nghĩ bạn là người lạnh lùng, kiêu ngạo hoặc khó gần. Họ có thể cảm thấy khó khăn trong việc kết nối cảm xúc với bạn vì bạn thường giấu kín những suy nghĩ bên trong. Sự độc lập quá mức cũng có thể tạo ra khoảng cách và sự cô lập.",
      advice: "Hãy học cách mở lòng và chia sẻ cảm xúc của mình nhiều hơn với những người bạn tin tưởng. Trí tuệ là một món quà, nhưng sự kết nối cảm xúc mới làm cho cuộc sống trở nên trọn vẹn. Hãy sử dụng kiến thức của mình để giúp đỡ người khác thay vì tạo ra một bức tường ngăn cách. Đừng ngại thể hiện sự ấm áp và gần gũi."
    },
    8: {
      aura: "Bạn mang đến cảm giác quyền lực, tự tin và thành đạt. Ấn tượng đầu tiên bạn để lại là một người chuyên nghiệp, có tham vọng và khả năng quản lý xuất sắc. Phong thái của bạn thường toát lên sự quyết đoán, thực tế và tập trung vào kết quả.",
      magnet: "Mọi người bị thu hút bởi sự mạnh mẽ, tầm nhìn chiến lược và khả năng biến ý tưởng thành hiện thực của bạn. Họ cảm thấy an tâm khi được dẫn dắt bởi một người có năng lực và bản lĩnh. Sự tự tin và phong thái đĩnh đạc của bạn truyền cảm hứng cho người khác nỗ lực vươn lên.",
      illusion: "Tuy nhiên, vẻ ngoài quyền lực này đôi khi khiến người khác nghĩ bạn là người thực dụng, tham lam hoặc độc tài. Họ có thể e ngại việc tiếp cận bạn vì sợ bị đánh giá qua lăng kính vật chất hoặc bị áp đặt ý kiến. Sự tập trung quá mức vào công việc cũng có thể khiến bạn trở nên lạnh lùng và thiếu sự đồng cảm.",
      advice: "Hãy học cách cân bằng giữa tham vọng vật chất và những giá trị tinh thần. Sử dụng quyền lực và tài năng của mình để tạo ra những tác động tích cực cho cộng đồng thay vì chỉ phục vụ lợi ích cá nhân. Hãy thể hiện sự trân trọng và đồng cảm với những người xung quanh để xây dựng những mối quan hệ bền vững và ý nghĩa hơn."
    },
    9: {
      aura: "Bạn tỏa ra năng lượng của sự vị tha, bao dung và tầm nhìn rộng lớn. Ấn tượng đầu tiên bạn để lại là một người nhân hậu, có lý tưởng cao đẹp và luôn hướng tới cộng đồng. Phong thái của bạn thường toát lên sự thấu hiểu, lòng trắc ẩn và mong muốn cống hiến.",
      magnet: "Mọi người bị thu hút bởi sự rộng lượng, tấm lòng nhân ái và khả năng truyền cảm hứng của bạn. Họ cảm thấy được xoa dịu và nâng đỡ khi ở cạnh một người luôn sẵn sàng cho đi mà không mong cầu nhận lại. Sự bao dung và tầm nhìn nhân văn của bạn tạo ra một sức hút mạnh mẽ.",
      illusion: "Tuy nhiên, vẻ ngoài vị tha này đôi khi khiến người khác nghĩ bạn là người ảo tưởng, thiếu thực tế hoặc dễ bị lợi dụng. Họ có thể nghi ngờ tính khả thi của những lý tưởng mà bạn theo đuổi. Sự hy sinh quá mức cũng có thể khiến bạn trở nên bi lụy hoặc ôm đồm quá nhiều nỗi đau của người khác.",
      advice: "Hãy học cách kết hợp lý tưởng cao đẹp với những hành động thực tế. Sự cho đi chỉ thực sự có ý nghĩa khi nó được đặt đúng chỗ và không làm tổn hại đến bản thân bạn. Hãy thiết lập những ranh giới cần thiết để bảo vệ năng lượng của mình và học cách buông bỏ những gì không thuộc về trách nhiệm của bạn."
    },
    11: {
      aura: "Khi bước vào một căn phòng, người mang Nhân cách 11 tỏa ra một trường năng lượng của sự tĩnh lặng huyền bí, tựa như mặt hồ thu phản chiếu ánh trăng. Họ không ồn ào hay cố gắng thu hút sự chú ý, nhưng lại sở hữu một sức hút vô hình khiến người khác bất giác ngoái nhìn. Ấn tượng đầu tiên họ gieo vào tiềm thức người đối diện là sự thanh tao, sâu sắc và một trực giác dường như có thể thấu thị mọi tầng vỉa của tâm hồn.",
      magnet: "Mọi người bị thu hút bởi họ không phải vì những lời lẽ hoa mỹ, mà bởi khả năng lắng nghe bằng cả linh hồn. Cách họ hiện diện trong một cuộc trò chuyện tạo ra một không gian an toàn tuyệt đối, nơi những người xung quanh cảm thấy được thấu hiểu mà không cần phải phán xét. Đôi mắt và phong thái của họ phát ra tần số của sự chữa lành, khiến người khác tự nhiên muốn trút bỏ lớp áo giáp phòng thủ để bộc bạch những góc khuất sâu kín nhất.",
      illusion: "Chiếc mặt nạ của sự thấu cảm và trí tuệ tâm linh này đôi khi trở thành một gánh nặng. Người đời thường gán mác họ là những 'nhà hiền triết' luôn có sẵn câu trả lời, hoặc kỳ vọng họ phải luôn mạnh mẽ, bao dung để gánh vác cảm xúc của người khác. Khoảng cách giữa một vỏ bọc tĩnh tại và một nội tâm cuộn trào những luồng sóng cảm xúc mãnh liệt khiến họ thường xuyên cảm thấy lạc lõng. Áp lực phải duy trì hình ảnh 'người chữa lành' đôi khi vắt kiệt năng lượng sống của chính họ.",
      advice: "Để chiếc mặt nạ Nhân cách 11 trở thành công cụ kết nối thay vì gông cùm, bạn cần học nghệ thuật 'thấu cảm có ranh giới'. Hãy hiểu rằng bạn là tấm gương phản chiếu ánh sáng, chứ không phải là ngọn lửa phải tự đốt cháy mình để sưởi ấm người khác. Cho phép bản thân được yếu đuối, được từ chối tiếp nhận những năng lượng độc hại. Khi bạn biết cách bảo vệ tần số rung động của chính mình, lớp vỏ bọc này sẽ trở thành một lăng kính tuyệt đẹp, giúp bạn truyền dẫn trí tuệ vũ trụ vào đời sống thực tại một cách nhẹ nhàng và trọn vẹn nhất."
    },
    22: {
      aura: "Bạn tỏa ra năng lượng của một nhà kiến tạo vĩ đại, kết hợp giữa tầm nhìn xa trông rộng và khả năng thực thi xuất sắc. Ấn tượng đầu tiên bạn để lại là một người có bản lĩnh, đáng tin cậy và có khả năng biến những ý tưởng không tưởng thành hiện thực. Phong thái của bạn thường toát lên sự điềm tĩnh, quyền lực và sự tập trung cao độ.",
      magnet: "Mọi người bị thu hút bởi sự vĩ đại trong tư duy và những thành tựu thực tế của bạn. Họ cảm thấy an tâm và được truyền cảm hứng khi làm việc cùng một người có khả năng xây dựng những nền tảng vững chắc và mang lại lợi ích cho cộng đồng. Sự kết hợp giữa lý tưởng và thực tế tạo ra một sức hút không thể chối từ.",
      illusion: "Tuy nhiên, vẻ ngoài vĩ đại này đôi khi khiến người khác nghĩ bạn là người quá tham vọng, áp đặt hoặc khó gần. Họ có thể cảm thấy áp lực trước những tiêu chuẩn cao và sự đòi hỏi khắt khe của bạn. Sự tập trung quá mức vào công việc lớn cũng có thể khiến bạn bỏ qua những chi tiết nhỏ hoặc những mối quan hệ cá nhân.",
      advice: "Hãy học cách chia sẻ tầm nhìn của mình một cách gần gũi và truyền cảm hứng thay vì áp đặt. Sự vĩ đại thực sự không chỉ nằm ở những công trình bạn xây dựng, mà còn ở cách bạn nâng đỡ và phát triển những người xung quanh. Hãy dành thời gian cho những niềm vui giản dị và những mối quan hệ cá nhân để cuộc sống trở nên cân bằng và trọn vẹn hơn."
    },
    33: {
      aura: "Bạn mang đến cảm giác của một người thầy tâm linh, tràn đầy tình yêu thương vô điều kiện và sự hy sinh cao cả. Ấn tượng đầu tiên bạn để lại là một người nhân hậu, bao dung và luôn sẵn sàng chữa lành cho những tâm hồn tổn thương. Phong thái của bạn thường toát lên sự thánh thiện, dịu dàng và khả năng thấu cảm sâu sắc.",
      magnet: "Mọi người bị thu hút bởi năng lượng chữa lành và tình yêu thương rộng lớn của bạn. Họ tìm đến bạn như một bến đỗ bình yên giữa những giông bão cuộc đời. Sự tận tâm và khả năng xoa dịu nỗi đau của bạn khiến người khác cảm thấy được bảo bọc và yêu thương một cách trọn vẹn.",
      illusion: "Tuy nhiên, vẻ ngoài thánh thiện này đôi khi khiến người khác kỳ vọng bạn phải luôn hoàn hảo, không bao giờ biết mệt mỏi hay tức giận. Họ có thể ỷ lại vào sự giúp đỡ của bạn và quên mất rằng bạn cũng là một con người cần được chăm sóc. Sự hy sinh quá mức cũng có thể khiến bạn kiệt quệ cả về thể chất lẫn tinh thần.",
      advice: "Hãy học cách yêu thương bản thân trước khi yêu thương người khác. Sự chữa lành tốt nhất đôi khi là hướng dẫn họ tự tìm ra sức mạnh bên trong mình thay vì gánh vác mọi nỗi đau thay họ. Hãy thiết lập những ranh giới rõ ràng để bảo vệ năng lượng của mình và cho phép bản thân được nghỉ ngơi, được yếu đuối khi cần thiết."
    }
  };

  return interpretations[number] || {
    aura: `Mang năng lượng của số ${number}, khí chất bề ngoài của bạn tỏa ra sự đặc trưng riêng biệt. Ấn tượng đầu tiên bạn để lại thường rất rõ nét và mang đậm dấu ấn cá nhân.`,
    magnet: "Mọi người bị thu hút bởi cách bạn thể hiện bản thân và tương tác với thế giới xung quanh. Phong cách giao tiếp của bạn tạo ra một điểm tựa nhất định cho những người tiếp xúc.",
    illusion: "Tuy nhiên, vẻ bề ngoài này đôi khi che giấu những suy nghĩ và cảm xúc phức tạp bên trong. Người khác có thể đánh giá bạn chỉ qua lăng kính của chiếc mặt nạ xã hội này, tạo ra những kỳ vọng không hoàn toàn khớp với con người thật của bạn.",
    advice: "Hãy học cách dung hòa giữa hình ảnh bạn thể hiện ra bên ngoài và giá trị cốt lõi bên trong. Sử dụng vỏ bọc này như một cầu nối linh hoạt thay vì một rào cản, cho phép những người thực sự quan trọng được nhìn thấy chiều sâu chân thật của bạn."
  };
}

export function getPinnacleMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Giai đoạn của sự khởi đầu mới, tự lập và khẳng định bản thân. Cơ hội để bạn trở thành người dẫn đầu và tiên phong. Bạn sẽ được thôi thúc để đứng trên đôi chân của chính mình, phát triển sự tự tin và lòng can đảm. Đây là lúc để bạn vứt bỏ sự phụ thuộc và tự mình đưa ra những quyết định quan trọng định hình tương lai.",
    2: "Giai đoạn của sự hợp tác, kiên nhẫn và xây dựng các mối quan hệ. Trực giác và sự tinh tế sẽ giúp bạn thành công. Bạn sẽ học được nghệ thuật ngoại giao, sự thấu cảm và cách làm việc nhóm hiệu quả. Đây là thời kỳ mà những thành tựu lớn nhất thường đến từ việc hỗ trợ người khác hoặc thông qua các mối quan hệ đối tác bền chặt.",
    3: "Giai đoạn của sự sáng tạo, thể hiện bản thân và niềm vui. Bạn sẽ có nhiều cơ hội để giao tiếp và tỏa sáng. Năng lượng của giai đoạn này khuyến khích bạn bộc lộ tài năng nghệ thuật, khả năng ngôn ngữ và sự lạc quan. Bạn sẽ thu hút người khác bằng sự duyên dáng và khiếu hài hước của mình, đồng thời học cách tận hưởng cuộc sống một cách trọn vẹn.",
    4: "Giai đoạn của sự chăm chỉ, xây dựng nền tảng vững chắc và thực tế. Đòi hỏi sự kỷ luật và tổ chức cao. Bạn sẽ phải đối mặt với những thử thách đòi hỏi sự kiên trì và nỗ lực không ngừng. Tuy nhiên, những gì bạn xây dựng trong giai đoạn này (sự nghiệp, tài chính, gia đình) sẽ vô cùng vững chắc và tồn tại lâu dài.",
    5: "Giai đoạn của sự thay đổi, tự do và những trải nghiệm mới. Cơ hội để phiêu lưu và mở rộng tầm nhìn. Cuộc sống của bạn sẽ trở nên năng động, khó đoán và đầy màu sắc hơn. Bạn sẽ được thôi thúc để phá vỡ những giới hạn cũ, đi du lịch, gặp gỡ những người mới và khám phá những khía cạnh khác nhau của bản thân.",
    6: "Giai đoạn của trách nhiệm gia đình, tình yêu thương và sự chăm sóc. Tập trung vào việc xây dựng tổ ấm và cộng đồng. Bạn sẽ tìm thấy ý nghĩa sâu sắc trong việc phục vụ người khác, chăm lo cho gia đình hoặc tham gia vào các hoạt động xã hội. Đây là thời kỳ của sự gắn kết tình cảm, hôn nhân và nuôi dạy con cái.",
    7: "Giai đoạn của sự phát triển tâm linh, học hỏi và chiêm nghiệm. Thời gian để quay vào bên trong và tìm kiếm chân lý. Bạn sẽ cảm thấy khao khát tri thức, muốn nghiên cứu sâu về triết học, tôn giáo hoặc khoa học. Đây là lúc để bạn phát triển trực giác, trí tuệ và sự thấu hiểu sâu sắc về bản chất của cuộc sống.",
    8: "Giai đoạn của thành tựu vật chất, quyền lực và tài chính. Cơ hội để đạt được những thành công lớn trong sự nghiệp. Bạn sẽ có cơ hội thể hiện khả năng lãnh đạo, quản lý kinh doanh và thu hút sự giàu có. Tuy nhiên, bạn cũng cần học cách sử dụng quyền lực và tiền bạc một cách khôn ngoan và có đạo đức.",
    9: "Giai đoạn của sự hoàn thiện, lòng vị tha và kết thúc một chu kỳ. Thời điểm để cho đi và phục vụ nhân loại. Bạn sẽ được kêu gọi để đóng góp cho cộng đồng, tham gia các hoạt động từ thiện và lan tỏa tình yêu thương vô điều kiện. Đây cũng là lúc để buông bỏ những gì không còn phù hợp và chuẩn bị cho một khởi đầu mới.",
    11: "Giai đoạn của sự thức tỉnh tâm linh mạnh mẽ, trực giác nhạy bén và truyền cảm hứng cho người khác. Bạn sẽ trở thành một ngọn hải đăng, dẫn dắt và soi sáng cho những người xung quanh bằng trí tuệ và sự thấu cảm sâu sắc của mình. Đòi hỏi bạn phải duy trì sự cân bằng nội tâm để không bị choáng ngợp bởi năng lượng mạnh mẽ này.",
    22: "Giai đoạn của việc biến những giấc mơ lớn thành hiện thực, xây dựng những công trình mang tính vĩ mô và để lại di sản. Bạn có khả năng kết hợp tầm nhìn xa trông rộng với khả năng thực thi xuất sắc. Đây là thời kỳ để bạn tạo ra những tác động tích cực và lâu dài cho xã hội."
  };
  return meanings[number] || "Giai đoạn mang năng lượng đặc biệt, đòi hỏi sự tập trung và phát triển bản thân.";
}

export function getChallengeMeaning(number: number) {
  const meanings: Record<number, string> = {
    0: "Thử thách của sự lựa chọn. Bạn có quyền tự do quyết định hướng đi, nhưng cũng phải tự chịu trách nhiệm hoàn toàn. Đòi hỏi bạn phải có sự tỉnh táo, độc lập trong tư duy và không ngừng học hỏi để đưa ra những quyết định sáng suốt nhất.",
    1: "Thử thách về sự tự tin và độc lập. Bạn cần vượt qua sự phụ thuộc và học cách đứng trên đôi chân của mình. Bạn có thể cảm thấy thiếu tự tin, sợ hãi khi phải tự đưa ra quyết định hoặc bị áp đảo bởi những người có cá tính mạnh. Bài học là phải tìm thấy sức mạnh nội tại và dám thể hiện bản thân.",
    2: "Thử thách về sự nhạy cảm và hợp tác. Tránh việc quá nhạy cảm hoặc để người khác lợi dụng lòng tốt của bạn. Bạn dễ bị tổn thương bởi những lời chỉ trích hoặc cảm xúc của người khác. Bài học là học cách thiết lập ranh giới cá nhân, không đánh mất mình trong các mối quan hệ và biết nói 'không' khi cần thiết.",
    3: "Thử thách về sự phân tán năng lượng và giao tiếp. Cần tập trung vào mục tiêu và tránh việc nói quá nhiều hoặc hời hợt. Bạn có thể gặp khó khăn trong việc diễn đạt cảm xúc thật, hoặc dễ bị xao nhãng bởi quá nhiều sở thích. Bài học là học cách giao tiếp chân thành, có chiều sâu và rèn luyện sự tập trung.",
    4: "Thử thách về sự cứng nhắc và lười biếng. Cần vượt qua sự bảo thủ và học cách làm việc có kỷ luật, linh hoạt hơn. Bạn có thể có xu hướng trốn tránh trách nhiệm, làm việc thiếu kế hoạch hoặc ngược lại, quá bảo thủ và không chịu thay đổi. Bài học là xây dựng tính kỷ luật, tổ chức và sẵn sàng thích nghi.",
    5: "Thử thách về sự bốc đồng và thiếu ổn định. Cần kiểm soát sự khao khát tự do quá mức và học cách cam kết. Bạn dễ cảm thấy nhàm chán, muốn thay đổi liên tục và sợ hãi sự ràng buộc. Bài học là tìm thấy sự tự do trong khuôn khổ, học cách chịu trách nhiệm và hoàn thành những gì đã bắt đầu.",
    6: "Thử thách về sự áp đặt và lo lắng thái quá. Tránh việc can thiệp quá sâu vào cuộc sống của người khác và học cách buông bỏ. Bạn có xu hướng muốn kiểm soát, bảo bọc quá mức hoặc tự gánh vác mọi trách nhiệm. Bài học là học cách yêu thương không sở hữu, tôn trọng sự lựa chọn của người khác và chăm sóc chính mình.",
    7: "Thử thách về sự cô lập và kiêu ngạo. Cần mở lòng hơn với mọi người và tránh việc tự nhốt mình trong thế giới riêng. Bạn có thể trở nên quá đa nghi, lạnh lùng hoặc tự cao về trí tuệ của mình. Bài học là học cách chia sẻ, kết nối cảm xúc với người khác và giữ thái độ khiêm tốn trong quá trình học hỏi.",
    8: "Thử thách về vật chất và quyền lực. Tránh việc quá tham vọng, thực dụng hoặc lạm dụng quyền lực. Bạn có thể bị ám ảnh bởi tiền bạc, địa vị hoặc sử dụng sai quyền lực của mình. Bài học là hiểu được giá trị thực sự của sự giàu có, sử dụng quyền lực một cách có đạo đức và cân bằng giữa vật chất và tinh thần.",
    9: "Thử thách về cảm xúc và sự gắn kết. Cần học cách tha thứ, buông bỏ quá khứ và không bi lụy. Bạn có thể gặp khó khăn trong việc giải phóng những tổn thương cũ, dễ bị lừa gạt tình cảm hoặc hy sinh bản thân một cách mù quáng. Bài học là học cách yêu thương bản thân, tha thứ và phát triển lòng vị tha đích thực."
  };
  return meanings[number] || "Thử thách đòi hỏi bạn phải nỗ lực vượt qua giới hạn của bản thân.";
}

export function getDevelopmentMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Phát triển khả năng lãnh đạo, sự tự tin và tinh thần tiên phong. Dám nghĩ dám làm. Bạn cần học cách tin tưởng vào bản năng của mình, đưa ra những quyết định độc lập và không sợ hãi khi phải đi ngược lại đám đông. Sự tự lập là chìa khóa để bạn mở khóa tiềm năng thực sự.",
    2: "Phát triển sự tinh tế, khả năng lắng nghe và nghệ thuật hòa giải. Xây dựng sự hòa hợp. Bạn cần rèn luyện sự kiên nhẫn, khả năng thấu cảm và nghệ thuật làm việc nhóm. Sức mạnh của bạn nằm ở sự mềm mỏng, khả năng kết nối và tạo ra môi trường hòa bình xung quanh mình.",
    3: "Phát triển khả năng diễn đạt, sự sáng tạo và tinh thần lạc quan. Truyền cảm hứng cho người khác. Bạn cần tìm ra những kênh phù hợp để bộc lộ tài năng nghệ thuật và ý tưởng của mình. Sự vui vẻ, nhiệt huyết và khả năng giao tiếp duyên dáng sẽ giúp bạn thu hút những cơ hội tuyệt vời.",
    4: "Phát triển tính kỷ luật, khả năng tổ chức và sự kiên trì. Xây dựng nền tảng vững chắc. Bạn cần học cách làm việc có hệ thống, chú ý đến chi tiết và không ngại khó khăn. Sự kiên định và thực tế sẽ giúp bạn biến những ý tưởng thành hiện thực bền vững.",
    5: "Phát triển sự linh hoạt, khả năng thích nghi và tinh thần phiêu lưu. Sẵn sàng đón nhận sự thay đổi. Bạn cần mở rộng tầm nhìn, trải nghiệm những điều mới mẻ và không ngừng học hỏi. Khả năng thích ứng nhanh chóng với mọi hoàn cảnh sẽ là lợi thế lớn nhất của bạn.",
    6: "Phát triển tình yêu thương, trách nhiệm và khả năng chăm sóc. Xây dựng môi trường ấm áp. Bạn cần học cách cân bằng giữa việc cho và nhận, chăm sóc người khác nhưng không quên yêu thương chính mình. Sự tận tâm và lòng nhân ái sẽ giúp bạn tạo ra những mối quan hệ sâu sắc và bền chặt.",
    7: "Phát triển trí tuệ, trực giác và sự hiểu biết sâu sắc. Khám phá những chân lý ẩn giấu. Bạn cần dành thời gian cho sự tĩnh lặng, nghiên cứu và chiêm nghiệm. Khả năng phân tích sắc bén kết hợp với trực giác nhạy bén sẽ dẫn dắt bạn đến những khám phá mang tính đột phá.",
    8: "Phát triển khả năng quản lý, tư duy kinh doanh và sự độc lập tài chính. Đạt được thành tựu thực tế. Bạn cần học cách tổ chức, điều hành và sử dụng nguồn lực một cách hiệu quả. Sự tự tin, quyết đoán và tầm nhìn chiến lược sẽ giúp bạn đạt được những thành công lớn về mặt vật chất.",
    9: "Phát triển lòng vị tha, tầm nhìn rộng lớn và khả năng buông bỏ. Phụng sự cộng đồng. Bạn cần vượt qua những lợi ích cá nhân nhỏ bé để hướng tới những giá trị nhân văn cao cả hơn. Sự bao dung, lòng trắc ẩn và khả năng truyền cảm hứng sẽ giúp bạn để lại dấu ấn tốt đẹp trong lòng mọi người.",
    11: "Phát triển trực giác tâm linh, khả năng thấu cảm và truyền cảm hứng sâu sắc. Bạn cần học cách tin tưởng vào tiếng nói bên trong, duy trì sự cân bằng năng lượng và sử dụng sự nhạy cảm của mình để chữa lành và dẫn dắt người khác.",
    22: "Phát triển tầm nhìn vĩ mô, khả năng kiến tạo và xây dựng những giá trị bền vững. Bạn cần kết hợp những ý tưởng lớn lao với khả năng thực thi xuất sắc, làm việc có hệ thống và không ngừng nỗ lực để tạo ra những công trình mang lại lợi ích cho nhiều người."
  };
  return meanings[number] || "Phát triển những tiềm năng tiềm ẩn bên trong bạn.";
}

export function getPersonalYearMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Năm của sự khởi đầu mới, gieo hạt và thiết lập mục tiêu. Đây là lúc để bạn hành động độc lập, tự tin bước đi trên con đường mới. Những gì bạn bắt đầu trong năm nay sẽ ảnh hưởng đến cả chu kỳ 9 năm tiếp theo. Hãy dũng cảm thay đổi, từ bỏ những thói quen cũ không còn phù hợp và mạnh dạn thử sức ở những lĩnh vực mới. Đừng ngại đứng một mình, vì đây là năm để bạn khẳng định bản sắc cá nhân và rèn luyện bản lĩnh tiên phong.",
    2: "Năm của sự hợp tác, chờ đợi và phát triển các mối quan hệ. Hạt giống bạn gieo năm ngoái đang nảy mầm dưới lòng đất. Hãy kiên nhẫn, lắng nghe trực giác và tập trung vào sự hòa hợp thay vì cố gắng ép buộc mọi thứ diễn ra nhanh chóng. Đây là thời kỳ tuyệt vời để xây dựng các mối quan hệ đối tác, tình cảm và ngoại giao. Đôi khi bạn sẽ cảm thấy tiến độ chậm chạp, nhưng đó là lúc rễ cây đang cắm sâu vào lòng đất để chuẩn bị cho sự phát triển vững chắc sau này.",
    3: "Năm của sự mở rộng, giao tiếp và thể hiện bản thân. Hạt giống đã vươn lên khỏi mặt đất. Đây là thời điểm tuyệt vời để sáng tạo, kết nối xã hội, tận hưởng niềm vui và chia sẻ ý tưởng của bạn với thế giới. Năng lượng của năm nay rất tươi sáng và nhẹ nhàng, khuyến khích bạn tham gia các hoạt động nghệ thuật, giải trí và mở rộng vòng tròn bạn bè. Hãy cẩn thận đừng phân tán năng lượng quá mức vào những việc vô bổ.",
    4: "Năm của sự củng cố, làm việc chăm chỉ và xây dựng nền tảng. Cây cần được chăm sóc và cắt tỉa. Hãy tập trung vào tính kỷ luật, tổ chức lại cuộc sống, tài chính và công việc. Đây không phải là năm để mạo hiểm mà là để tạo sự ổn định. Bạn có thể cảm thấy áp lực công việc gia tăng và nhiều trách nhiệm hơn, nhưng những nỗ lực bền bỉ trong năm nay sẽ tạo ra bệ phóng vô cùng vững chắc cho tương lai.",
    5: "Năm của sự thay đổi, tự do và những trải nghiệm mới. Cây ra hoa và thu hút sự chú ý. Bạn sẽ cảm thấy khao khát sự mới mẻ, muốn đi du lịch, thay đổi công việc hoặc môi trường sống. Hãy linh hoạt và sẵn sàng đón nhận những cơ hội bất ngờ. Đây là năm để phá vỡ những rào cản cũ, mở rộng tầm nhìn và trải nghiệm cuộc sống ở nhiều khía cạnh khác nhau. Tuy nhiên, hãy giữ một mức độ kỷ luật nhất định để không bị mất phương hướng.",
    6: "Năm của trách nhiệm, gia đình và tình yêu thương. Cây bắt đầu kết trái. Trọng tâm của bạn sẽ hướng về tổ ấm, người thân và các mối quan hệ gần gũi. Đây là lúc để chăm sóc, nuôi dưỡng và giải quyết các vấn đề gia đình. Bạn có thể sẽ phải gánh vác nhiều trách nhiệm hơn đối với những người xung quanh, hoặc đón nhận những thay đổi lớn trong đời sống tình cảm như kết hôn, sinh con hoặc mua nhà. Hãy dùng tình yêu thương làm kim chỉ nam.",
    7: "Năm của sự chiêm nghiệm, học hỏi và phát triển tâm linh. Cây cần thời gian nghỉ ngơi để tích lũy dưỡng chất. Hãy dành thời gian cho bản thân, quay vào bên trong, phân tích và đánh giá lại cuộc sống. Tránh đưa ra những quyết định vật chất lớn trong năm nay. Đây là năm tuyệt vời để nghiên cứu, học tập nâng cao, thiền định và tìm kiếm sự thấu hiểu sâu sắc về bản thân cũng như vũ trụ. Sự tĩnh lặng sẽ mang lại cho bạn những câu trả lời quý giá.",
    8: "Năm của sự gặt hái, thành tựu vật chất và quyền lực. Đây là mùa thu hoạch những gì bạn đã gieo trồng và chăm sóc trong 7 năm qua. Cơ hội thăng tiến, thành công tài chính và sự công nhận đang chờ đón bạn nếu bạn đã nỗ lực hết mình. Hãy tự tin thể hiện năng lực lãnh đạo, đưa ra những quyết định kinh doanh táo bạo và quản lý tài chính một cách khôn ngoan. Tuy nhiên, hãy nhớ cân bằng giữa đời sống vật chất và tinh thần.",
    9: "Năm của sự kết thúc, dọn dẹp và lòng vị tha. Mùa đông đến, cây rụng lá để chuẩn bị cho một chu kỳ mới. Hãy buông bỏ những gì không còn phục vụ bạn (thói quen, mối quan hệ, công việc cũ), tha thứ và dọn dẹp không gian sống để đón nhận những điều mới mẻ vào năm sau. Đây là năm của sự tha thứ, lòng trắc ẩn và các hoạt động thiện nguyện. Đừng cố chấp níu kéo những thứ đã đến lúc phải ra đi, sự buông bỏ sẽ mang lại tự do đích thực."
  };
  return meanings[number] || "Năm mang năng lượng đặc biệt, đánh dấu một giai đoạn quan trọng trong cuộc đời bạn.";
}

export function getPersonalMonthMeaning(number: number) {
  const meanings: Record<number, string> = {
    1: "Tháng để bắt đầu dự án mới, đưa ra quyết định quan trọng và hành động độc lập. Hãy chủ động nắm bắt cơ hội và đừng ngại thể hiện bản lĩnh cá nhân.",
    2: "Tháng để hợp tác, ngoại giao, kiên nhẫn chờ đợi và chăm sóc các mối quan hệ. Lắng nghe trực giác và tránh những xung đột không cần thiết.",
    3: "Tháng của sự vui vẻ, giao tiếp, sáng tạo và thể hiện bản thân. Hãy tận hưởng cuộc sống, gặp gỡ bạn bè và để trí tưởng tượng bay bổng.",
    4: "Tháng để làm việc chăm chỉ, tổ chức lại mọi thứ, giải quyết các vấn đề thực tế và tài chính. Kỷ luật và sự tập trung là chìa khóa thành công.",
    5: "Tháng của sự thay đổi, linh hoạt, những chuyến đi và những trải nghiệm bất ngờ. Sẵn sàng đón nhận cái mới và phá vỡ những thói quen nhàm chán.",
    6: "Tháng tập trung vào gia đình, người thân, tình yêu và những trách nhiệm trong tổ ấm. Dành thời gian chăm sóc những người bạn yêu thương.",
    7: "Tháng để nghỉ ngơi, chiêm nghiệm, học hỏi, nghiên cứu và phát triển đời sống nội tâm. Tránh những quyết định bốc đồng và dành không gian cho sự tĩnh lặng.",
    8: "Tháng của công việc, kinh doanh, tài chính và gặt hái những thành quả vật chất. Thể hiện quyền lực và khả năng quản lý của bạn.",
    9: "Tháng để hoàn thành, kết thúc những việc dang dở, buông bỏ và dọn dẹp để chuẩn bị cho chu kỳ mới. Tha thứ và giải phóng những năng lượng tiêu cực."
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
