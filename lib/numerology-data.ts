export type NumberArchetype = {
  title: string;
  keywords: string;
  core: string;
  strengths: string[];
  weaknesses: string[];
  lifePath: string;
  destiny: string;
  soulUrge: string;
  personality: string;
  attitude: string;
  maturity: string;
  balance: string;
  hiddenPassion: string;
  rationalThought: string;
  approach: string;
  careers: string[];
  love: string;
  health: string;
};

export const numberArchetypes: Record<number, NumberArchetype> = {
  1: {
    title: "Người Tiên Phong",
    keywords: "Độc lập, Lãnh đạo, Tự chủ, Sáng tạo, Khởi xướng",
    core: "Số 1 mang năng lượng của sự khởi đầu, tính độc lập và khả năng lãnh đạo bẩm sinh. Bạn là người mở đường, luôn khao khát tự khẳng định mình và không ngại đối mặt với thử thách.",
    strengths: ["Khả năng lãnh đạo và dẫn dắt xuất sắc", "Độc lập, tự chủ, không thích dựa dẫm", "Sáng tạo, luôn có những ý tưởng đột phá", "Quyết đoán, dám nghĩ dám làm, dũng cảm"],
    weaknesses: ["Đôi khi độc đoán, bảo thủ, cái tôi cao", "Thiếu kiên nhẫn với những người chậm chạp", "Khó chấp nhận sự giúp đỡ từ người khác", "Dễ cảm thấy cô đơn trên đỉnh cao"],
    lifePath: "Đường đời của bạn là học cách đứng trên đôi chân của mình, phát triển sự tự tin và trở thành một nhà lãnh đạo. Bạn sẽ liên tục được đặt vào những tình huống đòi hỏi sự độc lập và quyết đoán. Bài học lớn nhất là học cách lãnh đạo bằng sự thấu hiểu thay vì áp đặt.",
    destiny: "Sứ mệnh của bạn là trở thành người dẫn đường, người khởi xướng những dự án mới hoặc tạo ra những hướng đi đột phá. Bạn được sinh ra để để lại dấu ấn cá nhân mạnh mẽ trên thế giới này.",
    soulUrge: "Sâu thẳm bên trong, bạn khao khát sự tự do tuyệt đối để làm mọi thứ theo cách của mình. Bạn muốn được công nhận là người giỏi nhất, người đứng đầu và không muốn bị bất kỳ ai kiểm soát hay chỉ đạo.",
    personality: "Người khác nhìn nhận bạn là một người mạnh mẽ, tự tin, đôi khi hơi lạnh lùng hoặc xa cách. Bạn toát lên khí chất của một người có thẩm quyền, khiến người khác tự nhiên muốn tuân theo hoặc nể trọng.",
    attitude: "Khi đối mặt với vấn đề, bạn thường tự mình giải quyết thay vì nhờ vả. Bạn tiếp cận cuộc sống với thái độ chủ động, đôi khi hơi hiếu thắng và luôn muốn là người kiểm soát tình hình.",
    maturity: "Khi bước vào nửa sau cuộc đời, bạn sẽ đạt được sự tự tin tuyệt đối mà không cần phải chứng tỏ bản thân. Bạn trở thành một nhà lãnh đạo thông thái, biết cách trao quyền và truyền cảm hứng cho thế hệ sau.",
    balance: "Khi gặp khủng hoảng, bạn cần tìm lại sức mạnh nội tại. Đừng cố gắng kiểm soát mọi thứ, hãy cho phép bản thân lùi lại một bước, nhìn nhận vấn đề một cách khách quan và tin tưởng vào khả năng tự phục hồi của mình.",
    hiddenPassion: "Bạn có một niềm đam mê mãnh liệt với việc chiến thắng, vượt qua giới hạn và trở thành người giỏi nhất trong lĩnh vực bạn chọn. Bạn luôn âm thầm nỗ lực để vươn lên vị trí dẫn đầu.",
    rationalThought: "Bạn suy nghĩ một cách độc lập, logic và hướng tới kết quả. Bạn không thích những lý thuyết rườm rà mà luôn tìm kiếm giải pháp nhanh chóng, trực tiếp và hiệu quả nhất.",
    approach: "Bạn bắt đầu mọi việc với sự tự tin, quyết tâm và một kế hoạch rõ ràng. Bạn thích tự mình khởi xướng và thường là người đưa ra những bước đi đầu tiên mang tính quyết định.",
    careers: ["Giám đốc điều hành", "Doanh nhân", "Nhà phát minh", "Chỉ huy quân đội", "Chính trị gia", "Nhà sản xuất", "Quản lý dự án"],
    love: "Trong tình yêu, bạn là người chủ động, nồng nhiệt và thích che chở. Tuy nhiên, bạn cần tránh xu hướng áp đặt và kiểm soát đối phương. Hãy học cách lắng nghe và tôn trọng không gian riêng của người bạn đời.",
    health: "Cần chú ý đến các vấn đề liên quan đến đầu, não bộ và hệ tuần hoàn do tính chất công việc thường xuyên căng thẳng. Hãy dành thời gian thư giãn và tập thể dục đều đặn."
  },
  2: {
    title: "Người Hòa Giải",
    keywords: "Hợp tác, Trực giác, Hòa bình, Thấu cảm, Ngoại giao",
    core: "Số 2 mang năng lượng của sự kết nối, tình yêu thương và sự hòa hợp. Bạn là người nhạy cảm, có trực giác tuyệt vời và luôn tìm kiếm sự cân bằng trong mọi mối quan hệ.",
    strengths: ["Trực giác cực kỳ nhạy bén, thấu hiểu người khác", "Khả năng ngoại giao, hòa giải xung đột xuất sắc", "Biết lắng nghe, đồng cảm và chia sẻ", "Tận tụy, trung thành và là một người đồng hành tuyệt vời"],
    weaknesses: ["Quá nhạy cảm, dễ bị tổn thương bởi lời nói của người khác", "Thiếu quyết đoán, hay do dự vì sợ làm mất lòng", "Dễ đánh mất bản thân để làm hài lòng người khác", "Có xu hướng phụ thuộc cảm xúc"],
    lifePath: "Đường đời của bạn là học cách hợp tác, yêu thương và xây dựng các mối quan hệ bền chặt. Bạn sẽ trải qua nhiều bài học về sự nhạy cảm và ranh giới cảm xúc. Nhiệm vụ của bạn là mang lại sự hòa bình và thấu hiểu cho môi trường xung quanh.",
    destiny: "Sứ mệnh của bạn là trở thành người kết nối, người mang lại sự hòa hợp và chữa lành những rạn nứt. Bạn sinh ra để hỗ trợ, tư vấn và giúp đỡ người khác phát huy tối đa tiềm năng của họ.",
    soulUrge: "Linh hồn bạn khao khát tình yêu, sự an toàn và sự gắn kết sâu sắc. Bạn muốn được yêu thương, được trân trọng và sống trong một môi trường hòa bình, nơi mọi người đối xử tử tế với nhau.",
    personality: "Người khác thấy bạn là một người dịu dàng, thân thiện, dễ gần và đáng tin cậy. Bạn toát lên sự ấm áp, khiến mọi người cảm thấy thoải mái khi ở bên và dễ dàng tâm sự những điều thầm kín.",
    attitude: "Bạn tiếp cận cuộc sống một cách nhẹ nhàng, tránh né xung đột và luôn cố gắng tìm kiếm tiếng nói chung. Khi gặp khó khăn, bạn thường tìm kiếm sự hỗ trợ, lời khuyên và sự đồng hành từ những người tin cậy.",
    maturity: "Về hậu vận, bạn sẽ phát triển một trực giác sâu sắc và khả năng thấu hiểu con người đến mức tinh tế. Bạn trở thành một người cố vấn thông thái, mang lại sự bình yên và định hướng cho những người xung quanh.",
    balance: "Khi đối mặt với khủng hoảng, bạn cần tìm kiếm sự cân bằng cảm xúc. Đừng kìm nén cảm xúc nhưng cũng đừng để chúng cuốn trôi. Hãy chia sẻ với người bạn tin tưởng và học cách nói 'không' khi cần thiết để bảo vệ năng lượng của mình.",
    hiddenPassion: "Bạn có một niềm đam mê thầm kín với nghệ thuật, âm nhạc, cái đẹp và những điều mang tính tâm linh, tinh tế. Bạn luôn khao khát tạo ra sự hài hòa trong mọi khía cạnh của cuộc sống.",
    rationalThought: "Bạn suy nghĩ dựa trên trực giác và cảm xúc nhiều hơn là logic thuần túy. Bạn luôn cân nhắc đến cảm nhận của người khác và tác động của quyết định lên các mối quan hệ trước khi hành động.",
    approach: "Bạn bắt đầu mọi việc một cách cẩn trọng, từ tốn và luôn tìm kiếm sự đồng thuận. Bạn thích làm việc nhóm và thường đóng vai trò là chất keo gắn kết các thành viên lại với nhau.",
    careers: ["Nhà ngoại giao", "Cố vấn tâm lý", "Giáo viên", "Y tá", "Nhà văn", "Nghệ sĩ", "Trợ lý cấp cao"],
    love: "Bạn là một người bạn đời tuyệt vời: lãng mạn, thấu hiểu và luôn sẵn sàng hy sinh. Tuy nhiên, sự nhạy cảm quá mức có thể khiến bạn dễ bị tổn thương. Hãy tìm một người biết trân trọng sự tinh tế của bạn.",
    health: "Hệ tiêu hóa và hệ thần kinh của bạn khá nhạy cảm với căng thẳng. Yoga, thiền định và một môi trường sống yên tĩnh là liều thuốc tốt nhất cho bạn."
  },
  3: {
    title: "Người Truyền Cảm Hứng",
    keywords: "Sáng tạo, Giao tiếp, Lạc quan, Vui vẻ, Nghệ thuật",
    core: "Số 3 mang năng lượng của sự thể hiện bản thân, niềm vui và sự sáng tạo không giới hạn. Bạn là một linh hồn tươi trẻ, luôn mang lại tiếng cười và ánh sáng cho những nơi bạn đi qua.",
    strengths: ["Khả năng giao tiếp, diễn đạt và thuyết phục tuyệt vời", "Sáng tạo bẩm sinh, trí tưởng tượng phong phú", "Lạc quan, vui vẻ, có khiếu hài hước", "Dễ dàng thu hút và truyền cảm hứng cho đám đông"],
    weaknesses: ["Dễ bị phân tán năng lượng, thiếu tập trung", "Đôi khi hời hợt, thiếu chiều sâu hoặc nói quá nhiều", "Dễ chán nản nếu không có sự đổi mới", "Thiếu kỷ luật và khả năng quản lý tài chính"],
    lifePath: "Đường đời của bạn là học cách thể hiện bản thân một cách tích cực thông qua ngôn từ, nghệ thuật hoặc bất kỳ hình thức sáng tạo nào. Bài học lớn nhất là tìm thấy niềm vui thực sự từ bên trong và lan tỏa nó, đồng thời học cách tập trung năng lượng để không bị phân tán.",
    destiny: "Sứ mệnh của bạn là nâng đỡ tinh thần người khác, mang lại niềm vui và hy vọng. Bạn sinh ra để tỏa sáng, để tiếng nói và sự sáng tạo của bạn chạm đến trái tim của nhiều người.",
    soulUrge: "Sâu thẳm bên trong, bạn khao khát được chú ý, được lắng nghe và được tự do thể hiện bản thân mà không bị phán xét. Bạn muốn cuộc sống của mình là một sân khấu đầy màu sắc và tiếng cười.",
    personality: "Người khác nhìn nhận bạn là một người duyên dáng, lôi cuốn, vui vẻ và tràn đầy năng lượng. Bạn luôn là tâm điểm của các buổi tiệc, người mang lại không khí sôi động và tích cực.",
    attitude: "Bạn đối mặt với cuộc sống bằng sự lạc quan và nụ cười. Ngay cả trong khó khăn, bạn vẫn cố gắng tìm ra khía cạnh tích cực hoặc dùng sự hài hước để xoa dịu tình hình.",
    maturity: "Khi trưởng thành, bạn sẽ học được cách sử dụng ngôn từ và sự sáng tạo của mình một cách có chiều sâu và mục đích hơn. Bạn trở thành một người truyền cảm hứng thực thụ, dùng câu chuyện của mình để chữa lành và động viên người khác.",
    balance: "Khi gặp khủng hoảng, đừng cố gắng che giấu nỗi buồn bằng nụ cười gượng gạo. Hãy cho phép bản thân trải nghiệm mọi cung bậc cảm xúc. Viết lách, vẽ, hát hoặc nói chuyện với một người bạn hiểu mình sẽ giúp bạn lấy lại sự cân bằng.",
    hiddenPassion: "Bạn có đam mê mãnh liệt với nghệ thuật, sân khấu, viết lách hoặc bất cứ điều gì cho phép bạn bộc lộ cái tôi. Bạn luôn khao khát biến những ý tưởng trong đầu thành hiện thực rực rỡ.",
    rationalThought: "Tư duy của bạn rất linh hoạt, nhảy bén và đầy tính sáng tạo. Bạn thường nảy ra những ý tưởng độc đáo một cách bất ngờ, nhưng đôi khi lại thiếu đi sự logic và tính khả thi thực tế.",
    approach: "Bạn tiếp cận mọi thứ với sự nhiệt tình, tò mò và tinh thần vui vẻ. Bạn thích những khởi đầu mới mẻ, thú vị và thường dùng sự duyên dáng của mình để mở ra những cánh cửa cơ hội.",
    careers: ["Diễn viên", "Ca sĩ", "Nhà văn", "Nhà thiết kế", "Chuyên viên truyền thông", "Người dẫn chương trình", "Diễn giả"],
    love: "Tình yêu với bạn phải tràn ngập niềm vui, tiếng cười và sự lãng mạn. Bạn thích những bất ngờ và sự mới mẻ. Tuy nhiên, hãy cẩn thận với sự cả thèm chóng chán và học cách cam kết sâu sắc hơn.",
    health: "Cổ họng, thanh quản và hệ hô hấp là những điểm yếu. Hãy chú ý giữ ấm và tránh làm việc quá sức. Việc bộc lộ cảm xúc một cách lành mạnh rất quan trọng cho sức khỏe của bạn."
  },
  4: {
    title: "Người Xây Dựng",
    keywords: "Thực tế, Kỷ luật, Tổ chức, Nền tảng, Chăm chỉ",
    core: "Số 4 mang năng lượng của sự ổn định, tính kỷ luật và khả năng làm việc chăm chỉ. Bạn là người thực tế, đáng tin cậy và luôn là trụ cột vững chắc cho gia đình và tổ chức.",
    strengths: ["Khả năng tổ chức, lập kế hoạch và quản lý tuyệt vời", "Chăm chỉ, kiên trì, không ngại khó khăn", "Đáng tin cậy, trung thực, có trách nhiệm cao", "Tư duy logic, thực tế, chú trọng vào chi tiết"],
    weaknesses: ["Cứng nhắc, bảo thủ, khó chấp nhận sự thay đổi", "Đôi khi quá nghiêm khắc với bản thân và người khác", "Dễ rơi vào trạng thái tham công tiếc việc", "Thiếu sự lãng mạn, đôi khi khô khan"],
    lifePath: "Đường đời của bạn là học cách xây dựng những nền tảng vững chắc, tạo ra trật tự từ sự hỗn loạn. Bạn sẽ trải qua nhiều bài học về sự kiên nhẫn, kỷ luật và làm việc chăm chỉ. Thành công của bạn đến từ những nỗ lực bền bỉ chứ không phải may mắn nhất thời.",
    destiny: "Sứ mệnh của bạn là tạo ra những giá trị thực tế, lâu dài và bền vững cho xã hội. Bạn sinh ra để là người thiết kế, người xây dựng, người đưa những ý tưởng bay bổng trở thành hiện thực vững chãi.",
    soulUrge: "Linh hồn bạn khao khát sự an toàn, ổn định và trật tự. Bạn muốn mọi thứ trong cuộc sống phải rõ ràng, có thể dự đoán được và được xây dựng trên một nền tảng vững chắc về tài chính lẫn tình cảm.",
    personality: "Người khác thấy bạn là một người nghiêm túc, đứng đắn, đáng tin cậy và có phần truyền thống. Bạn toát lên sự vững chãi, khiến người khác cảm thấy an tâm khi giao phó những công việc quan trọng cho bạn.",
    attitude: "Bạn tiếp cận cuộc sống một cách thực tế, logic và có phương pháp. Khi đối mặt với vấn đề, bạn không hoảng loạn mà sẽ bình tĩnh phân tích, lập kế hoạch chi tiết và từng bước giải quyết.",
    maturity: "Về hậu vận, bạn sẽ tận hưởng thành quả từ những nỗ lực không mệt mỏi của tuổi trẻ. Bạn sở hữu một khối tài sản hoặc một sự nghiệp vững chắc, trở thành một người cố vấn đáng kính về sự kiên trì và kỷ luật.",
    balance: "Khi khủng hoảng xảy ra, bạn có xu hướng làm việc nhiều hơn để trốn tránh. Để cân bằng, hãy học cách buông bỏ sự kiểm soát, chấp nhận rằng không phải mọi thứ đều diễn ra theo kế hoạch. Hãy dành thời gian nghỉ ngơi và kết nối với thiên nhiên.",
    hiddenPassion: "Bạn có niềm đam mê với việc sắp xếp, tổ chức, sửa chữa hoặc tạo ra những hệ thống hoạt động trơn tru. Bạn tìm thấy niềm vui trong việc biến một mớ hỗn độn thành một cấu trúc hoàn hảo.",
    rationalThought: "Tư duy của bạn cực kỳ logic, phân tích và thực tế. Bạn luôn đòi hỏi bằng chứng, số liệu và tính khả thi trước khi tin tưởng hoặc bắt tay vào làm bất cứ việc gì.",
    approach: "Bạn bắt đầu mọi việc bằng cách nghiên cứu kỹ lưỡng, lập kế hoạch chi tiết và chuẩn bị mọi nguồn lực cần thiết. Bạn không thích sự vội vã, bốc đồng mà luôn bước những bước đi vững chắc, an toàn.",
    careers: ["Kỹ sư", "Kiến trúc sư", "Kế toán", "Quản lý tài chính", "Lập trình viên", "Thợ thủ công", "Nông nghiệp"],
    love: "Bạn là người chung thủy, thực tế và đáng tin cậy trong tình yêu. Bạn thể hiện tình cảm bằng hành động chăm sóc thiết thực hơn là những lời có cánh. Hãy cố gắng thêm một chút lãng mạn vào mối quan hệ của mình.",
    health: "Xương khớp, răng và hệ tiêu hóa cần được quan tâm. Bạn có xu hướng làm việc quá sức, vì vậy việc duy trì một chế độ ăn uống và nghỉ ngơi có kỷ luật là vô cùng cần thiết."
  },
  5: {
    title: "Người Phiêu Lưu",
    keywords: "Tự do, Thay đổi, Trải nghiệm, Linh hoạt, Mạo hiểm",
    core: "Số 5 mang năng lượng của sự tự do, sự thay đổi và những trải nghiệm phong phú. Bạn là một linh hồn tự do, luôn khao khát khám phá thế giới và không chịu sự gò bó của bất kỳ khuôn khổ nào.",
    strengths: ["Cực kỳ linh hoạt, dễ dàng thích nghi với mọi hoàn cảnh", "Năng động, dũng cảm, dám chấp nhận rủi ro", "Giao tiếp tốt, dễ dàng kết bạn và thu hút người khác", "Tư duy mở, luôn sẵn sàng đón nhận những ý tưởng mới"],
    weaknesses: ["Cả thèm chóng chán, thiếu tính kiên nhẫn và cam kết", "Dễ sa đà vào các thú vui tiêu cực hoặc nghiện ngập", "Bốc đồng, hành động thiếu suy nghĩ thấu đáo", "Thiếu kỷ luật và sự ổn định trong cuộc sống"],
    lifePath: "Đường đời của bạn là một chuyến phiêu lưu đầy màu sắc. Bạn sẽ học được những bài học lớn nhất thông qua sự thay đổi, những chuyến đi và việc trải nghiệm nhiều khía cạnh khác nhau của cuộc sống. Nhiệm vụ của bạn là học cách sử dụng sự tự do một cách có trách nhiệm.",
    destiny: "Sứ mệnh của bạn là mang lại sự đổi mới, phá vỡ những rào cản cũ kỹ và thúc đẩy sự tiến bộ. Bạn sinh ra để trải nghiệm, để sống trọn vẹn từng khoảnh khắc và truyền cảm hứng về sự tự do cho người khác.",
    soulUrge: "Sâu thẳm bên trong, bạn khao khát sự tự do tuyệt đối – tự do di chuyển, tự do tư tưởng, tự do trải nghiệm. Bạn sợ hãi sự nhàm chán, những thói quen lặp đi lặp lại và cảm giác bị trói buộc.",
    personality: "Người khác nhìn nhận bạn là một người thú vị, cuốn hút, đầy năng lượng và có chút gì đó hoang dã, khó đoán. Bạn luôn mang lại luồng gió mới và sự phấn khích cho những người xung quanh.",
    attitude: "Bạn đối mặt với cuộc sống bằng sự tò mò, háo hức và tinh thần sẵn sàng thử nghiệm. Khi gặp khó khăn, bạn thường tìm cách linh hoạt xoay chuyển tình thế hoặc đơn giản là thay đổi hướng đi để tìm kiếm cơ hội mới.",
    maturity: "Khi trưởng thành, bạn sẽ học được cách cân bằng giữa khao khát tự do và những trách nhiệm cần thiết. Bạn trở thành một người từng trải, sở hữu một kho tàng kiến thức và kinh nghiệm sống phong phú, sẵn sàng chia sẻ với thế hệ sau.",
    balance: "Khi gặp khủng সংকট, sự bốc đồng có thể khiến bạn đưa ra những quyết định sai lầm. Để cân bằng, hãy học cách dừng lại một nhịp, hít thở sâu và đánh giá hậu quả trước khi hành động. Tìm kiếm sự ổn định từ một vài thói quen lành mạnh cốt lõi.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với việc khám phá những vùng đất mới, những nền văn hóa lạ, những ý tưởng đột phá hoặc những trải nghiệm kích thích các giác quan. Bạn luôn muốn thử những điều chưa từng làm.",
    rationalThought: "Tư duy của bạn rất nhanh nhạy, đa chiều và không theo lối mòn. Bạn có khả năng kết nối những thông tin tưởng chừng không liên quan để tạo ra những giải pháp sáng tạo và độc đáo.",
    approach: "Bạn tiếp cận mọi việc với tinh thần cởi mở, sẵn sàng thử nghiệm và không ngại rủi ro. Bạn thích những thử thách mới mẻ và thường hành động dựa trên cảm hứng và sự thôi thúc của khoảnh khắc.",
    careers: ["Hướng dẫn viên du lịch", "Phóng viên", "Nhà thám hiểm", "Chuyên gia marketing", "Phi công", "Nhà tổ chức sự kiện", "Bán hàng"],
    love: "Bạn khao khát một tình yêu tự do, không gò bó và đầy những trải nghiệm thú vị. Bạn cần một người bạn đời có thể đồng hành cùng bạn trong những chuyến phiêu lưu và tôn trọng không gian riêng của bạn.",
    health: "Hệ thần kinh và các tuyến thượng thận dễ bị quá tải do lối sống năng động. Hãy tránh xa các chất kích thích và tìm kiếm sự cân bằng thông qua các hoạt động thể thao ngoài trời."
  },
  6: {
    title: "Người Nuôi Dưỡng",
    keywords: "Tình yêu, Gia đình, Trách nhiệm, Chăm sóc, Hòa hợp",
    core: "Số 6 mang năng lượng của tình yêu thương vô điều kiện, sự chăm sóc và trách nhiệm. Bạn là trái tim của gia đình và cộng đồng, luôn sẵn sàng hy sinh để mang lại hạnh phúc cho những người thân yêu.",
    strengths: ["Giàu tình yêu thương, bao dung và vị tha", "Có tinh thần trách nhiệm cực kỳ cao", "Khả năng chăm sóc, tư vấn và chữa lành cho người khác", "Có khiếu thẩm mỹ, yêu cái đẹp và sự hài hòa"],
    weaknesses: ["Hay lo lắng thái quá, thích kiểm soát và can thiệp sâu", "Dễ bị lợi dụng lòng tốt, hy sinh bản thân quá mức", "Có xu hướng áp đặt quan điểm của mình lên người khác vì 'muốn tốt cho họ'", "Dễ cảm thấy tội lỗi nếu không giúp được người khác"],
    lifePath: "Đường đời của bạn là học cách cân bằng giữa việc cho đi và nhận lại. Bạn sẽ trải qua nhiều bài học về tình yêu, gia đình và trách nhiệm. Nhiệm vụ lớn nhất của bạn là học cách yêu thương bản thân mình nhiều như cách bạn yêu thương người khác.",
    destiny: "Sứ mệnh của bạn là tạo ra sự hòa hợp, cái đẹp và mang lại sự chữa lành cho thế giới. Bạn sinh ra để làm một người cha/người mẹ tuyệt vời, một người thầy, một người tư vấn hoặc một người bảo vệ cộng đồng.",
    soulUrge: "Linh hồn bạn khao khát một tổ ấm hạnh phúc, sự bình yên và được những người xung quanh yêu thương, trân trọng. Bạn muốn cảm thấy mình có ích, được cần đến và có thể che chở cho những người yếu thế.",
    personality: "Người khác thấy bạn là một người ấm áp, đáng tin cậy, chu đáo và mang lại cảm giác an toàn như một người mẹ/người cha. Bạn toát lên sự hiền hòa, khiến người khác tự nhiên muốn tìm đến bạn để chia sẻ và nhận lời khuyên.",
    attitude: "Bạn tiếp cận cuộc sống với thái độ quan tâm, chăm sóc và luôn nghĩ đến lợi ích chung. Khi có vấn đề xảy ra, bạn thường là người đứng ra gánh vác trách nhiệm và tìm cách giải quyết êm đẹp nhất cho tất cả mọi người.",
    maturity: "Về hậu vận, bạn sẽ được bao bọc bởi tình yêu thương của gia đình và những người bạn đã từng giúp đỡ. Bạn trở thành một điểm tựa tinh thần vững chắc, một người mang lại sự bình yên và thông thái cho cộng đồng.",
    balance: "Khi khủng hoảng xảy ra, bạn thường có xu hướng ôm đồm mọi thứ vào mình. Để cân bằng, hãy học cách buông bỏ, cho phép người khác tự chịu trách nhiệm về cuộc đời họ. Đừng quên dành thời gian chăm sóc và nuông chiều chính bản thân mình.",
    hiddenPassion: "Bạn có niềm đam mê với việc trang hoàng nhà cửa, nấu nướng, làm vườn, nghệ thuật hoặc bất cứ điều gì giúp tạo ra một môi trường sống đẹp đẽ, ấm cúng và hài hòa cho những người thân yêu.",
    rationalThought: "Tư duy của bạn luôn gắn liền với sự thấu cảm và các giá trị đạo đức. Bạn đánh giá mọi vấn đề dựa trên việc nó sẽ ảnh hưởng thế nào đến con người, gia đình và sự hòa hợp chung.",
    approach: "Bạn bắt đầu mọi việc bằng cách quan tâm đến cảm nhận và nhu cầu của những người liên quan. Bạn thích tạo ra một môi trường làm việc hoặc học tập thoải mái, gắn kết và đầy tình người trước khi đi vào công việc chính.",
    careers: ["Bác sĩ", "Giáo viên", "Cố vấn gia đình", "Nhà thiết kế nội thất", "Đầu bếp", "Chuyên viên nhân sự", "Hoạt động xã hội"],
    love: "Gia đình và tình yêu là ưu tiên hàng đầu của bạn. Bạn là người chăm sóc tuyệt vời, luôn muốn mang lại những điều tốt nhất cho người mình yêu. Hãy nhớ rằng tình yêu đích thực cũng cần sự bình đẳng và không gian riêng.",
    health: "Vùng ngực, tim và hệ sinh sản cần được lưu ý. Bạn dễ mắc các bệnh do căng thẳng tâm lý khi lo lắng quá nhiều cho người khác. Hãy học cách yêu thương bản thân trước tiên."
  },
  7: {
    title: "Nhà Thông Thái",
    keywords: "Trí tuệ, Tâm linh, Phân tích, Nội tâm, Nghiên cứu",
    core: "Số 7 mang năng lượng của sự tìm tòi, trí tuệ sâu sắc và sự kết nối tâm linh. Bạn là một nhà nghiên cứu bẩm sinh, luôn khao khát tìm hiểu bản chất thực sự của vũ trụ và ý nghĩa của cuộc sống.",
    strengths: ["Trí tuệ sắc bén, khả năng phân tích và quan sát tuyệt vời", "Trực giác mạnh mẽ, có sự kết nối tâm linh sâu sắc", "Ham học hỏi, kiến thức uyên thâm trong lĩnh vực đam mê", "Độc lập trong suy nghĩ, không chạy theo đám đông"],
    weaknesses: ["Dễ trở nên cô lập, xa lánh xã hội, khó gần", "Đa nghi, hay hoài nghi và khó đặt niềm tin vào người khác", "Có xu hướng suy nghĩ quá nhiều (overthinking), bi quan", "Thiếu thực tế, đôi khi kiêu ngạo về trí tuệ của mình"],
    lifePath: "Đường đời của bạn là một hành trình đi tìm chân lý. Bạn sẽ trải qua nhiều giai đoạn cần sự tĩnh lặng, cô độc để chiêm nghiệm và học hỏi. Bài học lớn nhất của bạn là học cách tin tưởng vào trực giác của mình và mở lòng kết nối với thế giới xung quanh mà không đánh mất bản ngã.",
    destiny: "Sứ mệnh của bạn là trở thành người khai sáng, người mang lại những kiến thức sâu sắc, triết lý hoặc những phát minh đột phá cho nhân loại. Bạn sinh ra để giải mã những bí ẩn của cuộc sống.",
    soulUrge: "Sâu thẳm bên trong, bạn khao khát sự tĩnh lặng, không gian riêng tư và sự thấu hiểu những quy luật vận hành của vũ trụ. Bạn muốn tìm thấy sự bình yên trong tâm hồn và sự thông thái tuyệt đối.",
    personality: "Người khác nhìn nhận bạn là một người bí ẩn, thông minh, điềm tĩnh và có phần khó nắm bắt. Bạn toát lên khí chất của một học giả hoặc một nhà tu hành, khiến người khác nể trọng nhưng đôi khi e ngại tiếp cận.",
    attitude: "Bạn tiếp cận cuộc sống bằng sự quan sát, phân tích và hoài nghi. Bạn không dễ dàng tin vào những gì được nghe mà luôn muốn tự mình kiểm chứng, tìm hiểu nguyên nhân sâu xa của mọi vấn đề.",
    maturity: "Khi trưởng thành, bạn sẽ đạt được sự uyên thâm và sự bình an nội tại sâu sắc. Bạn trở thành một bậc thầy, một người hướng dẫn tâm linh hoặc một chuyên gia hàng đầu, người mà người khác tìm đến để xin những lời khuyên minh triết.",
    balance: "Khi gặp khủng hoảng, bạn có xu hướng thu mình lại và cắt đứt liên lạc với thế giới. Để cân bằng, hãy kết hợp việc thiền định, hòa mình vào thiên nhiên với việc chia sẻ những suy nghĩ của mình cho một người bạn thực sự tin tưởng.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với việc đọc sách, nghiên cứu khoa học, triết học, tâm lý học, tôn giáo hoặc những lĩnh vực huyền bí. Bạn luôn muốn đào sâu vào những chủ đề mà người khác thường bỏ qua.",
    rationalThought: "Tư duy của bạn cực kỳ logic, phân tích sâu sắc nhưng lại được dẫn dắt bởi một trực giác nhạy bén. Bạn có khả năng nhìn thấu những lớp vỏ bọc bề ngoài để chạm đến bản chất cốt lõi của sự việc.",
    approach: "Bạn bắt đầu mọi việc bằng cách thu thập thông tin, quan sát kỹ lưỡng và suy nghĩ thấu đáo trước khi hành động. Bạn không thích sự ồn ào, vội vã mà luôn cần thời gian để chuẩn bị tâm lý và kiến thức.",
    careers: ["Nhà khoa học", "Nhà nghiên cứu", "Triết gia", "Nhà phân tích dữ liệu", "Thám tử", "Chuyên gia công nghệ", "Nhà văn"],
    love: "Bạn khá kín tiếng và khó mở lòng trong tình yêu. Bạn cần một người bạn đời thông minh, có chiều sâu tâm hồn và tôn trọng nhu cầu được ở một mình của bạn. Khi đã yêu, bạn rất chung thủy và sâu sắc.",
    health: "Hệ thần kinh, não bộ và các vấn đề tâm lý (như trầm cảm, lo âu) là những rủi ro lớn nhất. Thiền định, yoga và việc hòa mình vào thiên nhiên là những phương pháp trị liệu tuyệt vời cho bạn."
  },
  8: {
    title: "Người Kiến Tạo",
    keywords: "Quyền lực, Tài chính, Kinh doanh, Thành tựu, Vật chất",
    core: "Số 8 mang năng lượng của sự thành công vật chất, quyền lực và sự dồi dào. Bạn là một nhà điều hành bẩm sinh, có tầm nhìn xa trông rộng và khả năng biến những ý tưởng thành những đế chế thực sự.",
    strengths: ["Khả năng kinh doanh, quản lý tài chính và tổ chức xuất sắc", "Tầm nhìn xa, tham vọng lớn, ý chí kiên cường", "Khả năng lãnh đạo, điều hành và quản lý con người", "Thực tế, hiệu quả, luôn hướng tới kết quả và thành tựu"],
    weaknesses: ["Quá coi trọng vật chất, tiền bạc và địa vị", "Có thể trở nên độc tài, áp đặt và tàn nhẫn để đạt mục đích", "Dễ bỏ bê gia đình, sức khỏe và đời sống tinh thần vì công việc", "Thiếu sự đồng cảm, đôi khi quá thực dụng"],
    lifePath: "Đường đời của bạn là học cách làm chủ thế giới vật chất, tài chính và quyền lực. Bạn sẽ trải qua những thăng trầm lớn về tiền bạc để học được bài học về giá trị thực sự. Nhiệm vụ của bạn là tạo ra sự dồiào không chỉ cho bản thân mà còn cho xã hội.",
    destiny: "Sứ mệnh của bạn là trở thành người lãnh đạo các tổ chức lớn, tạo ra công ăn việc làm, xây dựng nền kinh tế vững mạnh và sử dụng quyền lực, sự giàu có của mình để tạo ra những tác động tích cực cho thế giới.",
    soulUrge: "Linh hồn bạn khao khát sự thành công, sự công nhận, quyền lực và sự tự do tài chính tuyệt đối. Bạn muốn để lại một di sản lớn lao, được người đời kính trọng và ngưỡng mộ vì những thành tựu của mình.",
    personality: "Người khác thấy bạn là một người quyền lực, tự tin, chuyên nghiệp và thành đạt. Bạn toát lên khí chất của một người sếp, một người có khả năng kiểm soát mọi tình huống và mang lại cảm giác an tâm về mặt vật chất.",
    attitude: "Bạn tiếp cận cuộc sống một cách thực tế, chiến lược và luôn hướng tới mục tiêu. Khi đối mặt với khó khăn, bạn xem đó là những thử thách cần phải vượt qua để chứng tỏ bản lĩnh và đạt được phần thưởng lớn hơn.",
    maturity: "Về hậu vận, bạn sẽ đạt được sự tự do tài chính và vị thế xã hội vững chắc. Bài học lớn nhất lúc này là học cách sử dụng sự giàu có của mình để làm từ thiện, giúp đỡ cộng đồng và tìm thấy sự bình an trong tâm hồn.",
    balance: "Khi khủng hoảng xảy ra, đặc biệt là về tài chính, bạn dễ rơi vào trạng thái mất kiểm soát và tức giận. Để cân bằng, hãy nhớ rằng giá trị của bạn không chỉ nằm ở số tiền bạn có. Hãy dành thời gian cho các hoạt động thể chất và kết nối lại với những giá trị tinh thần.",
    hiddenPassion: "Bạn có niềm đam mê với kinh doanh, đầu tư, quản lý tài sản, hoặc tham gia vào những dự án quy mô lớn. Bạn thích cảm giác chiến thắng trên thương trường và sự gia tăng của những con số trong tài khoản.",
    rationalThought: "Tư duy của bạn mang tính chiến lược, thực tế và luôn đánh giá dựa trên hiệu quả, lợi nhuận (ROI). Bạn có khả năng nhìn thấy bức tranh tổng thể của một hệ thống và biết cách tối ưu hóa nó để đạt kết quả cao nhất.",
    approach: "Bạn bắt đầu mọi việc với một mục tiêu rõ ràng, một chiến lược cụ thể và sự tập trung cao độ vào kết quả. Bạn thích nắm quyền kiểm soát, phân công công việc rõ ràng và đòi hỏi sự chuyên nghiệp từ những người hợp tác.",
    careers: ["Giám đốc điều hành (CEO)", "Chuyên gia tài chính", "Nhà đầu tư", "Luật sư", "Quản lý bất động sản", "Chủ doanh nghiệp", "Chính trị gia"],
    love: "Bạn thường bận rộn với công việc nên đôi khi lơ là chuyện tình cảm. Bạn cần một người bạn đời thấu hiểu tham vọng của bạn và có thể là hậu phương vững chắc. Hãy học cách cân bằng giữa công việc và gia đình.",
    health: "Căng thẳng kéo dài là kẻ thù lớn nhất của bạn, ảnh hưởng đến dạ dày, huyết áp và hệ tim mạch. Việc học cách thư giãn và ủy quyền công việc cho người khác là vô cùng quan trọng."
  },
  9: {
    title: "Người Vị Tha",
    keywords: "Nhân đạo, Hoàn thiện, Buông bỏ, Bao dung, Trí tuệ",
    core: "Số 9 mang năng lượng của sự hoàn thiện, lòng vị tha và tình yêu thương nhân loại. Bạn là một linh hồn già dặn, mang trong mình trí tuệ của tất cả các con số trước đó, luôn hướng tới những lý tưởng cao đẹp.",
    strengths: ["Lòng trắc ẩn sâu sắc, bao dung, vị tha, sẵn sàng giúp đỡ người khác", "Tầm nhìn rộng lớn, mang tính toàn cầu và nhân đạo", "Trực giác nhạy bén, trí tuệ sâu sắc, hiểu biết đa lĩnh vực", "Khả năng sáng tạo nghệ thuật và truyền cảm hứng mạnh mẽ"],
    weaknesses: ["Dễ bị lợi dụng lòng tốt, hy sinh bản thân một cách mù quáng", "Có xu hướng bi lụy, ôm giữ quá khứ, khó buông bỏ", "Đôi khi ảo tưởng, thiếu thực tế, sống trên mây", "Dễ thất vọng khi người khác không đạt được lý tưởng của mình"],
    lifePath: "Đường đời của bạn là một hành trình học cách cho đi vô điều kiện và buông bỏ. Bạn sẽ trải qua nhiều sự kết thúc, mất mát để hiểu được quy luật vô thường. Nhiệm vụ của bạn là dùng tình yêu thương và trí tuệ của mình để phục vụ và nâng tầm nhân loại.",
    destiny: "Sứ mệnh của bạn là trở thành người chữa lành, người thầy, nhà hoạt động xã hội hoặc một nghệ sĩ truyền cảm hứng. Bạn sinh ra để làm cho thế giới này trở nên tốt đẹp hơn, để lại một di sản về tình yêu và sự bao dung.",
    soulUrge: "Sâu thẳm bên trong, bạn khao khát được cống hiến, được làm những việc có ý nghĩa lớn lao cho cộng đồng. Bạn muốn thấy một thế giới hòa bình, công bằng, nơi mọi người yêu thương và giúp đỡ lẫn nhau.",
    personality: "Người khác nhìn nhận bạn là một người rộng lượng, hiền triết, lãng mạn và có sức hút kỳ lạ. Bạn toát lên một sự thấu hiểu sâu sắc, khiến người khác cảm thấy được an ủi và che chở khi ở bên cạnh.",
    attitude: "Bạn đối mặt với cuộc sống bằng sự bao dung, thấu hiểu và góc nhìn đa chiều. Khi gặp vấn đề, bạn thường cố gắng tìm hiểu nguyên nhân sâu xa, đặt mình vào vị trí của người khác để tha thứ thay vì oán trách.",
    maturity: "Khi trưởng thành, bạn sẽ đạt được trạng thái của sự buông bỏ và bình an nội tại. Bạn trở thành một tấm gương sáng về lòng vị tha, một người hướng dẫn tinh thần được nhiều người kính trọng và yêu mến.",
    balance: "Khi gặp khủng hoảng, bạn dễ rơi vào trạng thái đóng vai nạn nhân hoặc bi lụy. Để cân bằng, hãy học cách tha thứ cho bản thân và người khác, thực hành sự buông bỏ. Tham gia vào các hoạt động thiện nguyện hoặc sáng tạo nghệ thuật sẽ giúp bạn chữa lành.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với các hoạt động xã hội, bảo vệ môi trường, quyền con người, hoặc các bộ môn nghệ thuật mang tính nhân văn sâu sắc. Bạn luôn muốn đóng góp sức mình cho những mục đích cao cả.",
    rationalThought: "Tư duy của bạn mang tính triết học, tổng hợp và hướng tới lý tưởng. Bạn không chỉ nhìn vào các chi tiết nhỏ mà luôn đánh giá sự việc trong một bức tranh toàn cảnh, xem xét tác động của nó đến cộng đồng và nhân loại.",
    approach: "Bạn tiếp cận mọi việc với một tâm thế cởi mở, sẵn sàng lắng nghe và một mong muốn mãnh liệt được giúp đỡ. Bạn thường bắt đầu bằng việc tìm kiếm ý nghĩa và giá trị nhân văn của dự án trước khi đi vào các bước thực hiện cụ thể.",
    careers: ["Nhà hoạt động nhân quyền", "Bác sĩ không biên giới", "Nhà văn", "Nghệ sĩ", "Giáo viên", "Nhà lãnh đạo tinh thần", "Chuyên gia môi trường"],
    love: "Tình yêu của bạn rất bao la và lãng mạn. Bạn dễ dàng đồng cảm và yêu thương mọi người. Tuy nhiên, hãy cẩn thận đừng để lòng tốt của mình bị lợi dụng. Bạn cần một người bạn đời có cùng lý tưởng sống.",
    health: "Bạn dễ bị kiệt sức về mặt cảm xúc do hấp thụ quá nhiều năng lượng tiêu cực từ môi trường xung quanh. Hãy học cách bảo vệ năng lượng của mình và dành thời gian thanh lọc cơ thể, tâm trí."
  },
  11: {
    title: "Người Truyền Cảm Hứng (Master 11)",
    keywords: "Trực giác, Tâm linh, Thấu cảm, Chữa lành, Ánh sáng",
    core: "Số 11 là con số Master đầu tiên, mang năng lượng khuếch đại của số 2 nhưng ở một tầm mức tâm linh cao hơn. Bạn là một 'ăng-ten' nhạy bén của vũ trụ, sở hữu trực giác phi thường và khả năng thấu cảm sâu sắc.",
    strengths: ["Trực giác cực kỳ mạnh mẽ, có khả năng thấu thị, linh cảm chính xác", "Khả năng truyền cảm hứng, soi sáng và dẫn dắt tinh thần cho người khác", "Sự thấu cảm sâu sắc, có thể cảm nhận được nỗi đau của vạn vật", "Sáng tạo đột phá, mang những ý tưởng từ cõi tâm linh vào thực tại"],
    weaknesses: ["Hệ thần kinh cực kỳ nhạy cảm, dễ bị căng thẳng, lo âu, trầm cảm", "Dễ bị quá tải bởi năng lượng và cảm xúc của môi trường xung quanh", "Đôi khi sống quá mơ mộng, ảo tưởng, thiếu tính thực tế", "Cảm giác lạc lõng, khó hòa nhập với những điều trần tục"],
    lifePath: "Đường đời của bạn là một hành trình thức tỉnh tâm linh đầy thử thách. Bạn sẽ phải trải qua những bài học sâu sắc về việc làm chủ cảm xúc và hệ thần kinh nhạy bén của mình. Nhiệm vụ của bạn là trở thành một ngọn hải đăng, dùng ánh sáng trí tuệ và trực giác của mình để dẫn đường cho những người đang lạc lối.",
    destiny: "Sứ mệnh của bạn là trở thành một người chữa lành, một nhà ngoại cảm, một nghệ sĩ truyền cảm hứng hoặc một nhà lãnh đạo tinh thần. Bạn sinh ra để làm cầu nối giữa thế giới vật chất và thế giới tâm linh, mang thông điệp của vũ trụ đến với nhân loại.",
    soulUrge: "Linh hồn bạn khao khát sự thấu hiểu tâm linh, sự bình yên tuyệt đối và một kết nối sâu sắc với Đấng Tối Cao hoặc Vũ Trụ. Bạn muốn sống một cuộc đời có ý nghĩa cao cả, vượt ra khỏi những nhu cầu vật chất thông thường.",
    personality: "Người khác nhìn nhận bạn là một người bí ẩn, thanh tao, có sức hút kỳ lạ và đôi khi hơi 'khác người'. Bạn toát ra một trường năng lượng tĩnh lặng nhưng mãnh liệt, khiến người khác cảm thấy được xoa dịu và thấu hiểu đến tận tâm can.",
    attitude: "Bạn tiếp cận cuộc sống hoàn toàn dựa vào trực giác và cảm nhận bên trong. Khi đối mặt với khó khăn, bạn thường tìm kiếm câu trả lời thông qua thiền định, giấc mơ hoặc những dấu hiệu từ vũ trụ thay vì logic thông thường.",
    maturity: "Khi trưởng thành và làm chủ được năng lượng Master, bạn sẽ trở thành một bậc thầy tâm linh thực thụ. Bạn sở hữu một trí tuệ vượt thời gian, khả năng chữa lành mạnh mẽ và sống một cuộc đời đầy cảm hứng, bình an giữa những biến động.",
    balance: "Khủng hoảng của bạn thường đến từ sự quá tải năng lượng. Để cân bằng, việc thiết lập ranh giới năng lượng là sống còn. Bạn cần thời gian ở một mình, hòa mình vào thiên nhiên, thiền định và thực hành nối đất (grounding) thường xuyên để xả bỏ những năng lượng tiêu cực hấp thụ từ người khác.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với các bộ môn huyền học, tâm linh, chiêm tinh, tarot, năng lượng chữa lành hoặc nghệ thuật trừu tượng. Bạn luôn khao khát khám phá những chiều không gian khác của sự tồn tại.",
    rationalThought: "Tư duy của bạn không đi theo đường thẳng logic mà là những tia chớp trực giác (insight). Bạn thường 'biết' một điều gì đó là đúng mà không cần phải giải thích qua các bước phân tích thông thường.",
    approach: "Bạn bắt đầu mọi việc bằng cách lắng nghe tiếng nói bên trong và cảm nhận luồng năng lượng của tình huống. Bạn hành động khi cảm thấy có sự thôi thúc từ trực giác, đôi khi những bước đi của bạn có vẻ khó hiểu với người khác nhưng lại dẫn đến kết quả kỳ diệu.",
    careers: ["Nhà ngoại cảm", "Nhà tâm lý học", "Cố vấn tâm linh", "Nhà văn", "Nghệ sĩ", "Giáo viên", "Nhà trị liệu"],
    love: "Bạn khao khát một sự kết nối tâm hồn sâu sắc trong tình yêu, vượt qua những nhu cầu vật chất thông thường. Bạn rất nhạy cảm với cảm xúc của đối phương và cần một người bạn đời thấu hiểu, trân trọng sự tinh tế của bạn.",
    health: "Hệ thần kinh của bạn cực kỳ nhạy cảm. Bạn dễ bị ảnh hưởng bởi năng lượng tiêu cực từ người khác và môi trường. Thiền định, yoga và việc thiết lập ranh giới cảm xúc rõ ràng là điều bắt buộc."
  },
  22: {
    title: "Nhà Kiến Tạo Vĩ Mô (Master 22)",
    keywords: "Kiến tạo, Tầm nhìn, Vĩ mô, Thực tế, Di sản",
    core: "Số 22 là con số Master mạnh mẽ nhất, kết hợp tầm nhìn tâm linh của số 11 và khả năng thực thi thực tế của số 4. Bạn là 'Kiến trúc sư trưởng', người có khả năng biến những giấc mơ vĩ đại nhất thành hiện thực vững chãi.",
    strengths: ["Tầm nhìn vĩ mô, khả năng nhìn thấy bức tranh toàn cảnh và tiềm năng to lớn", "Năng lực tổ chức, quản lý và thực thi xuất chúng ở quy mô lớn", "Biến những lý tưởng tâm linh, nhân đạo thành các dự án thực tế, mang lại lợi ích cho số đông", "Sức mạnh ý chí phi thường, kiên trì vượt qua mọi trở ngại"],
    weaknesses: ["Áp lực tự tạo quá lớn, sợ hãi thất bại, sợ không hoàn thành được sứ mệnh", "Có thể trở nên độc tài, thao túng, tàn nhẫn nếu đi sai hướng", "Dễ bị choáng ngợp bởi chính những tham vọng khổng lồ của mình", "Làm việc quá sức, bỏ bê bản thân và các mối quan hệ cá nhân"],
    lifePath: "Đường đời của bạn là một con đường đầy tham vọng và trọng trách. Bạn sẽ được thử thách để vượt qua những giới hạn thông thường, học cách kết hợp giữa lý tưởng cao cả và hành động thực tế. Nhiệm vụ của bạn là xây dựng những công trình, hệ thống hoặc tổ chức mang lại lợi ích lâu dài cho nhân loại.",
    destiny: "Sứ mệnh của bạn là để lại một di sản vĩ đại cho thế giới. Bạn sinh ra để kiến tạo những giá trị bền vững, giải quyết những vấn đề mang tính toàn cầu và nâng tầm cuộc sống của hàng triệu người thông qua những dự án thực tế.",
    soulUrge: "Linh hồn bạn khao khát để lại dấu ấn không thể phai mờ trên thế giới này. Bạn muốn tạo ra những tác động to lớn, xây dựng những đế chế vững mạnh và được nhớ đến như một người đã thay đổi tiến trình lịch sử ở một khía cạnh nào đó.",
    personality: "Người khác nhìn nhận bạn là một người cực kỳ quyền lực, tài năng, đáng kính và có tầm ảnh hưởng lớn. Bạn toát lên khí chất của một nhà lãnh đạo kiệt xuất, khiến người khác hoàn toàn tin tưởng và sẵn sàng đi theo tầm nhìn của bạn.",
    attitude: "Bạn tiếp cận cuộc sống với một tư duy chiến lược, quy mô lớn và luôn hướng tới những mục tiêu dài hạn. Khi đối mặt với khó khăn, bạn nhìn nhận chúng như những viên gạch để xây dựng nên thành công lớn hơn, không bao giờ lùi bước trước thử thách.",
    maturity: "Về hậu vận, bạn sẽ đứng trên đỉnh cao của sự nghiệp, nhìn lại những di sản đồ sộ mà mình đã kiến tạo. Bạn trở thành một nhân vật có tầm ảnh hưởng sâu rộng, sử dụng quyền lực và tài nguyên của mình để định hình một tương lai tốt đẹp hơn cho thế hệ sau.",
    balance: "Khi gặp khủng hoảng, áp lực từ những kỳ vọng khổng lồ có thể đè bẹp bạn. Để cân bằng, hãy chia nhỏ mục tiêu lớn thành những bước đi nhỏ, thực tế. Học cách tin tưởng và giao phó công việc cho người khác. Đừng quên rằng bạn cũng là một con người cần được nghỉ ngơi và yêu thương.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với kiến trúc, quy hoạch đô thị, chính trị, kinh doanh quốc tế hoặc bất kỳ lĩnh vực nào cho phép bạn tạo ra những hệ thống và cấu trúc ảnh hưởng đến số đông.",
    rationalThought: "Tư duy của bạn là sự kết hợp hoàn hảo giữa trực giác nhạy bén và logic sắc sảo. Bạn có khả năng nắm bắt những ý tưởng trừu tượng, phức tạp và ngay lập tức lập ra một bản thiết kế chi tiết để hiện thực hóa chúng.",
    approach: "Bạn bắt đầu mọi việc bằng cách phác thảo một tầm nhìn vĩ mô, sau đó xây dựng một kế hoạch hành động cực kỳ chi tiết, bài bản và huy động mọi nguồn lực cần thiết để đảm bảo sự thành công tuyệt đối.",
    careers: ["Kiến trúc sư trưởng", "Nhà quy hoạch đô thị", "Chính trị gia cấp cao", "Giám đốc tập đoàn đa quốc gia", "Nhà sáng lập tổ chức phi chính phủ", "Kỹ sư trưởng"],
    love: "Bạn thường đặt sứ mệnh và công việc lên hàng đầu, vì vậy bạn cần một người bạn đời cực kỳ bao dung, thấu hiểu và có thể tự lập. Khi đã cam kết, bạn sẽ xây dựng một nền tảng gia đình vô cùng vững chắc.",
    health: "Bạn có nguy cơ cao bị kiệt sức (burnout) do gánh vác quá nhiều trọng trách. Các bệnh về xương khớp, cột sống và hệ tiêu hóa là những lời cảnh báo từ cơ thể. Hãy học cách nghỉ ngơi thực sự."
  },
  33: {
    title: "Người Thầy Chữa Lành (Master 33)",
    keywords: "Chữa lành, Tình yêu vô điều kiện, Hy sinh, Người thầy, Ánh sáng",
    core: "Số 33 là con số Master hiếm gặp nhất, đại diện cho tình yêu thương vô điều kiện và sự chữa lành ở cấp độ cao nhất. Bạn là hiện thân của lòng từ bi, mang năng lượng của một vị Bồ Tát hoặc một Bậc Thầy Tâm Linh, sẵn sàng hy sinh vì hạnh phúc của nhân loại.",
    strengths: ["Tình yêu thương vô điều kiện, lòng từ bi và sự hy sinh cao cả", "Khả năng chữa lành mạnh mẽ về cả thể chất, tinh thần và tâm hồn", "Trí tuệ tâm linh uyên thâm, khả năng truyền đạt và hướng dẫn xuất chúng", "Sức mạnh nâng đỡ, truyền cảm hứng và biến đổi cuộc đời người khác"],
    weaknesses: ["Gánh vác quá nhiều nỗi đau của thế gian, dẫn đến kiệt quệ năng lượng", "Hy sinh bản thân một cách mù quáng, để người khác lợi dụng lòng tốt", "Áp lực phải luôn hoàn hảo, luôn là người cứu rỗi, quên mất nhu cầu cá nhân", "Dễ rơi vào trạng thái trầm cảm sâu sắc nếu thấy thế giới quá tàn nhẫn"],
    lifePath: "Đường đời của bạn là con đường của sự phụng sự và tình yêu thương vô ngã. Bạn sẽ trải qua những thử thách khắc nghiệt về mặt cảm xúc để thấu hiểu trọn vẹn nỗi đau của nhân loại. Nhiệm vụ của bạn là trở thành một ngọn đuốc sáng, mang lại sự chữa lành và tình yêu cho những nơi tăm tối nhất.",
    destiny: "Sứ mệnh của bạn là trở thành 'Người Thầy của những Người Thầy', một nhà chữa lành vĩ đại hoặc một nhà cải cách xã hội mang lại tình yêu và sự hòa hợp. Bạn sinh ra để xoa dịu nỗi đau của thế giới và nâng cao tần số rung động của nhân loại.",
    soulUrge: "Linh hồn bạn khao khát được nhìn thấy mọi sinh linh trên trái đất này được sống trong tình yêu thương, hòa bình và hạnh phúc. Bạn muốn cống hiến toàn bộ sự tồn tại của mình để làm vơi đi sự đau khổ của người khác.",
    personality: "Người khác nhìn nhận bạn là một vị thánh sống, một người vô cùng hiền từ, bao dung và tỏa ra ánh sáng của sự thuần khiết. Sự hiện diện của bạn mang lại cảm giác bình an, an toàn và được che chở tuyệt đối cho bất kỳ ai tiếp xúc.",
    attitude: "Bạn đối mặt với cuộc sống bằng lòng từ bi và sự thấu hiểu sâu sắc. Khi gặp khó khăn hay sự thù ghét, bạn phản ứng lại bằng tình yêu thương và sự tha thứ, luôn nhìn thấy hạt mầm thiện lương bên trong mỗi con người.",
    maturity: "Khi trưởng thành và vượt qua được những bài học về sự hy sinh, bạn sẽ trở thành một biểu tượng của tình yêu thương vô điều kiện. Bạn sống một cuộc đời thanh thản, lan tỏa năng lượng chữa lành chỉ bằng sự hiện diện của mình, được vô số người tôn kính và biết ơn.",
    balance: "Khủng hoảng lớn nhất của bạn là sự cạn kiệt năng lượng do cho đi quá nhiều. Để cân bằng, bài học quan trọng nhất là 'bạn không thể rót nước từ một chiếc bình rỗng'. Bạn phải học cách yêu thương và chăm sóc bản thân mình trước tiên, thiết lập ranh giới rõ ràng để bảo vệ năng lượng chữa lành của mình.",
    hiddenPassion: "Bạn có niềm đam mê mãnh liệt với các phương pháp chữa lành tự nhiên, tâm lý học sâu, các hoạt động thiện nguyện quy mô lớn, hoặc nghệ thuật mang thông điệp thức tỉnh tâm linh mạnh mẽ.",
    rationalThought: "Tư duy của bạn vượt ra khỏi những ranh giới của logic thông thường, chạm đến sự minh triết của vũ trụ. Bạn hiểu được những quy luật nhân quả, sự kết nối của vạn vật và luôn đưa ra quyết định dựa trên tình yêu thương cao nhất.",
    approach: "Bạn tiếp cận mọi việc, mọi người với một trái tim rộng mở, không phán xét và một mong muốn thuần khiết là được giúp đỡ, được chữa lành và mang lại những điều tốt đẹp nhất cho họ.",
    careers: ["Nhà lãnh đạo tinh thần", "Bác sĩ", "Nhà hoạt động xã hội", "Nhà giáo dục", "Cố vấn cấp cao", "Nhà văn truyền cảm hứng", "Nghệ sĩ"],
    love: "Tình yêu của bạn là tình yêu vô điều kiện, không chỉ dành cho một người mà cho toàn nhân loại. Bạn là người bạn đời tuyệt vời, luôn mang lại sự chữa lành và bình an. Tuy nhiên, hãy cẩn thận đừng để bản thân bị lợi dụng.",
    health: "Bạn dễ mắc các bệnh liên quan đến hệ miễn dịch và sự kiệt quệ năng lượng do hấp thụ quá nhiều nỗi đau của người khác. Việc thanh lọc cơ thể, thiền định và bảo vệ trường năng lượng là vô cùng quan trọng."
  }
};

export function getDetailedInterpretation(indicator: string, number: number) {
  const archetype = numberArchetypes[number] || numberArchetypes[1];
  
  let content = "";
  
  switch (indicator) {
    case 'lifePath':
      content = `
        <p><strong>Đường Đời (Số Chủ Đạo)</strong> là chỉ số quan trọng nhất trong Thần Số Học, tiết lộ bản chất cốt lõi, những bài học bạn cần học và con đường bạn sẽ đi trong kiếp sống này.</p>
        <p>Với con số <strong>${number} - ${archetype.title}</strong>, ${archetype.core}</p>
        <p>${archetype.lifePath}</p>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-xl border border-green-100">
            <h4 class="text-green-800 font-bold mb-2">Điểm mạnh tự nhiên:</h4>
            <ul class="list-disc pl-5 text-sm text-green-700 space-y-1">
              ${archetype.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-xl border border-red-100">
            <h4 class="text-red-800 font-bold mb-2">Thử thách cần vượt qua:</h4>
            <ul class="list-disc pl-5 text-sm text-red-700 space-y-1">
              ${archetype.weaknesses.map(w => `<li>${w}</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <div class="mt-6 space-y-4">
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 class="text-blue-800 font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 15h6"/><path d="M3 18h6"/></svg>
              Nghề nghiệp phù hợp
            </h4>
            <p class="text-sm text-blue-700">${archetype.careers.join(', ')}</p>
          </div>
          
          <div class="bg-pink-50 p-4 rounded-xl border border-pink-100">
            <h4 class="text-pink-800 font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Tình duyên & Mối quan hệ
            </h4>
            <p class="text-sm text-pink-700">${archetype.love}</p>
          </div>
          
          <div class="bg-teal-50 p-4 rounded-xl border border-teal-100">
            <h4 class="text-teal-800 font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Sức khỏe & Thể chất
            </h4>
            <p class="text-sm text-teal-700">${archetype.health}</p>
          </div>
        </div>
      `;
      break;
    case 'destiny':
      content = `
        <p><strong>Sứ Mệnh</strong> tiết lộ mục đích bạn đến với cuộc đời này, những thành tựu bạn được định sẵn để đạt được và cách bạn đóng góp cho thế giới. Nó giống như kịch bản mà vũ trụ đã viết sẵn cho bạn, và bạn là diễn viên chính.</p>
        <div class="my-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
          <p class="text-purple-900 font-medium">Mang năng lượng số <strong>${number} - ${archetype.title}</strong>, ${archetype.destiny}</p>
        </div>
        <p>Để hoàn thành sứ mệnh này một cách xuất sắc, bạn cần phát huy tối đa những điểm mạnh của mình: <strong>${archetype.strengths.slice(0, 2).join('</strong> và <strong>')}</strong>. Đây chính là những công cụ đắc lực nhất mà vũ trụ đã trang bị cho bạn.</p>
        <p class="mt-2">Đồng thời, trên hành trình này, hãy cẩn trọng đừng để những điểm yếu như <em>${archetype.weaknesses[0].toLowerCase()}</em> cản bước bạn. Việc nhận thức và vượt qua những rào cản nội tâm này chính là chìa khóa để bạn chạm đến đỉnh cao của sứ mệnh.</p>
      `;
      break;
    case 'soulUrge':
      content = `
        <p><strong>Nội Tâm (Linh Hồn)</strong> là tiếng nói sâu thẳm bên trong bạn, những khát khao thầm kín nhất mà đôi khi chính bạn cũng không nhận ra. Đây là động lực thực sự đằng sau mọi hành động, quyết định và sự lựa chọn của bạn trong cuộc sống.</p>
        <div class="my-4 p-4 bg-rose-50 rounded-xl border-l-4 border-rose-500">
          <p class="text-rose-900 font-medium">Với chỉ số Nội Tâm <strong>${number}</strong>, ${archetype.soulUrge}</p>
        </div>
        <p>Khi bạn sống đúng với tiếng gọi của linh hồn số ${number}, bạn sẽ cảm thấy một sự thỏa mãn, bình an và hạnh phúc tột cùng. Mọi việc bạn làm dường như đều trôi chảy và tràn đầy ý nghĩa.</p>
        <p class="mt-2">Ngược lại, nếu bạn phớt lờ tiếng nói này để chạy theo những kỳ vọng của xã hội, gia đình hay những cám dỗ vật chất, bạn sẽ luôn cảm thấy một khoảng trống vô hình bên trong, một sự bồn chồn và không thỏa mãn dù có đạt được bao nhiêu thành tựu đi chăng nữa. Hãy dành thời gian tĩnh lặng để lắng nghe và nuôi dưỡng linh hồn mình.</p>
      `;
      break;
    case 'personality':
      content = `
        <p><strong>Tương Tác (Nhân Cách)</strong> là chiếc áo khoác bạn mặc khi bước ra ngoài xã hội. Nó là ấn tượng đầu tiên bạn tạo ra, cách bạn thể hiện bản thân và cách người khác nhìn nhận bạn trước khi họ thực sự hiểu rõ con người bên trong của bạn.</p>
        <div class="my-4 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
          <p class="text-amber-900 font-medium">Với chỉ số Tương Tác <strong>${number}</strong>, ${archetype.personality}</p>
        </div>
        <p>Hãy nhớ rằng, đây chỉ là lớp vỏ bọc bên ngoài. Đôi khi, nó có thể mâu thuẫn hoặc hoàn toàn khác biệt với Nội Tâm thực sự của bạn. Việc nhận thức được "chiếc mặt nạ" này sẽ giúp bạn giao tiếp hiệu quả hơn, biết cách tạo thiện cảm trong những lần gặp đầu tiên.</p>
        <p class="mt-2">Tuy nhiên, đừng để bản thân bị mắc kẹt trong hình ảnh này. Hãy học cách từ từ tháo bỏ lớp vỏ bọc để những người thực sự quan trọng có thể nhìn thấy và yêu thương con người thật của bạn.</p>
      `;
      break;
    case 'attitude':
      content = `
        <p><strong>Thái Độ</strong> là phản xạ tự nhiên của bạn trước những tình huống mới, những khó khăn, thử thách hoặc khi gặp gỡ những người mới. Nó giống như một bộ lọc mà qua đó bạn nhìn nhận và phản ứng với thế giới xung quanh.</p>
        <div class="my-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
          <p class="text-orange-900 font-medium">Với chỉ số Thái Độ <strong>${number}</strong>, ${archetype.attitude}</p>
        </div>
        <p>Thái độ này có thể là một vũ khí đắc lực giúp bạn vượt qua sóng gió, tạo ấn tượng mạnh mẽ và giải quyết vấn đề một cách nhanh chóng. Người khác thường đánh giá năng lực của bạn thông qua thái độ này trong những lúc dầu sôi lửa bỏng.</p>
        <p class="mt-2">Nhưng đôi khi, nó cũng có thể trở thành rào cản nếu bạn phản ứng quá cực đoan, cứng nhắc hoặc không phù hợp với hoàn cảnh. Hãy học cách quan sát phản ứng của chính mình và điều chỉnh thái độ linh hoạt hơn để đạt được kết quả tốt nhất.</p>
      `;
      break;
    case 'maturity':
      content = `
        <p><strong>Trưởng Thành</strong> là món quà bạn nhận được ở nửa sau của cuộc đời (thường từ 35-40 tuổi trở đi). Nó là sự kết tinh của những kinh nghiệm, bài học và sự phát triển cá nhân mà bạn đã trải qua, đồng thời chỉ ra hướng đi viên mãn nhất cho tuổi xế chiều.</p>
        <div class="my-4 p-4 bg-indigo-50 rounded-xl border-l-4 border-indigo-500">
          <p class="text-indigo-900 font-medium">Với chỉ số Trưởng Thành <strong>${number}</strong>, ${archetype.maturity}</p>
        </div>
        <p>Năng lượng của số ${number} sẽ không bộc lộ rõ ràng khi bạn còn trẻ, nhưng nó sẽ ngày càng hiện rõ và trở thành mục tiêu hướng tới khi bạn lớn tuổi. Bạn sẽ cảm thấy một sự thôi thúc mạnh mẽ để sống đúng với bản chất này.</p>
        <p class="mt-2">Việc hiểu trước về chỉ số Trưởng Thành giúp bạn có sự chuẩn bị tốt hơn cho tương lai, định hướng những nỗ lực hiện tại sao cho phù hợp với cái đích viên mãn cuối cùng, mang lại cho bạn sự bình an và trọn vẹn sâu sắc trong tâm hồn.</p>
      `;
      break;
    case 'balance':
      content = `
        <p><strong>Cân Bằng</strong> là chiếc phao cứu sinh của bạn khi cuộc sống rơi vào trạng thái mất kiểm soát, căng thẳng tột độ, đối mặt với những biến cố lớn hoặc khủng hoảng cá nhân.</p>
        <div class="my-4 p-4 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
          <p class="text-cyan-900 font-medium">Với chỉ số Cân Bằng <strong>${number}</strong>, ${archetype.balance}</p>
        </div>
        <p>Trong những lúc tăm tối nhất, khi bạn không biết phải làm gì tiếp theo, hãy ghi nhớ chìa khóa này. Đừng để những cảm xúc tiêu cực hay sự hoảng loạn dẫn dắt bạn.</p>
        <p class="mt-2">Bất cứ khi nào bạn cảm thấy chông chênh, mất phương hướng, hãy chủ động kích hoạt năng lượng tích cực của số ${number}. Việc thực hành những lời khuyên này sẽ giúp bạn nhanh chóng lấy lại sự tĩnh tại, tìm lại sự vững vàng cho tâm trí và tâm hồn để vượt qua giông bão.</p>
      `;
      break;
    case 'hiddenPassion':
      content = `
        <p><strong>Nội Cảm (Đam Mê Tiềm Ẩn)</strong> tiết lộ những tài năng, sở thích hoặc khao khát mãnh liệt ẩn sâu bên trong bạn. Đây thường là những điều bạn làm một cách vô thức, say mê quên thời gian và mang lại cho bạn niềm vui thuần khiết nhất.</p>
        <div class="my-4 p-4 bg-fuchsia-50 rounded-xl border-l-4 border-fuchsia-500">
          <p class="text-fuchsia-900 font-medium">Với chỉ số Nội Cảm <strong>${number}</strong>, ${archetype.hiddenPassion}</p>
        </div>
        <p>Nhiều người thường bỏ qua chỉ số này vì coi đó chỉ là "sở thích vặt vãnh". Tuy nhiên, việc nuôi dưỡng và phát triển niềm đam mê này không chỉ mang lại cho bạn sự cân bằng, giải tỏa căng thẳng mà còn có thể mở ra những cơ hội bất ngờ.</p>
        <p class="mt-2">Đôi khi, chính đam mê tiềm ẩn này lại là chìa khóa dẫn đến một sự nghiệp rực rỡ thứ hai hoặc một dự án mang lại tiếng vang lớn. Đừng phớt lờ tiếng gọi của đam mê, hãy dành thời gian cho nó mỗi ngày!</p>
      `;
      break;
    case 'rationalThought':
      content = `
        <p><strong>Chỉ Số Trí Tuệ</strong> cho biết cách bộ não của bạn hoạt động, cách bạn tiếp nhận thông tin, xử lý dữ liệu, phân tích vấn đề và đưa ra quyết định trong cuộc sống hàng ngày.</p>
        <div class="my-4 p-4 bg-slate-50 rounded-xl border-l-4 border-slate-500">
          <p class="text-slate-900 font-medium">Với Chỉ Số Trí Tuệ <strong>${number}</strong>, ${archetype.rationalThought}</p>
        </div>
        <p>Hiểu được cách tư duy của chính mình là một lợi thế to lớn. Nó giúp bạn tối ưu hóa quá trình học tập, làm việc, biết cách lựa chọn môi trường và phương pháp phù hợp nhất để phát huy trí tuệ.</p>
        <p class="mt-2">Đồng thời, nó cũng giúp bạn bao dung và thấu hiểu hơn khi giao tiếp với những người có cách tư duy khác biệt. Thay vì tranh cãi, bạn sẽ biết cách trình bày vấn đề theo ngôn ngữ mà họ dễ tiếp thu nhất.</p>
      `;
      break;
    case 'approach':
      content = `
        <p><strong>Năng Lực Tiếp Cận</strong> là cách bạn bắt tay vào thực hiện một dự án mới, giải quyết một vấn đề mới, bước vào một môi trường mới hoặc bắt đầu một mối quan hệ mới. Nó là bước chân đầu tiên, là cách bạn "mở bài".</p>
        <div class="my-4 p-4 bg-lime-50 rounded-xl border-l-4 border-lime-500">
          <p class="text-lime-900 font-medium">Với Năng Lực Tiếp Cận <strong>${number}</strong>, ${archetype.approach}</p>
        </div>
        <p>Nhận thức được phong cách tiếp cận của mình giúp bạn chuẩn bị tốt hơn cho những khởi đầu mới. Bạn sẽ biết cách phát huy tối đa lợi thế tự nhiên của mình để tạo đà thuận lợi.</p>
        <p class="mt-2">Quan trọng hơn, nó giúp bạn nhận ra và khắc phục những điểm mù trong giai đoạn đầu của mọi việc. Nếu bạn biết mình hay bốc đồng, bạn sẽ học cách chậm lại; nếu bạn biết mình hay chần chừ, bạn sẽ học cách quyết đoán hơn.</p>
      `;
      break;
    default:
      content = `<p>Năng lượng của số <strong>${number}</strong> mang đến cho bạn những đặc điểm của sự ${archetype.keywords.toLowerCase()}.</p>`;
  }
  
  return content;
}
