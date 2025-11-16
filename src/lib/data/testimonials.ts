export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  commends: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nguyễn Minh Khoa',
    avatar:
      'https://ui-avatars.com/api/?name=Nguyen+Minh+Khoa&background=0D8ABC&color=fff',
    email: 'khoanguyen98@gmail.com',
    commends:
      'Đồ ăn trong nhà hàng rất ngon và trình bày đẹp mắt. Phòng nghỉ rộng, thoải mái, giường ngủ êm. Phòng tắm sạch sẽ và được chuẩn bị đầy đủ đồ dùng. View nhìn ra biển buổi sáng rất chill.',
  },
  {
    id: 2,
    name: 'Trần Thu Hà',
    avatar:
      'https://ui-avatars.com/api/?name=Tran+Thu+Ha&background=E91E63&color=fff',
    email: 'thuha02@gmail.com',
    commends:
      'Buffet sáng đa dạng và chất lượng. Mình đặc biệt thích món hải sản tươi. Phòng có ban công hướng núi rất đẹp, phòng tắm hiện đại và sáng sủa. Không gian yên tĩnh, dễ ngủ.',
  },
  {
    id: 3,
    name: 'Phạm Quang Huy',
    avatar:
      'https://ui-avatars.com/api/?name=Pham+Quang+Huy&background=4CAF50&color=fff',
    email: 'quanghuy95@gmail.com',
    commends:
      'Phòng nghỉ rất sạch, nhân viên vệ sinh cực kỳ cẩn thận. Phòng tắm rộng, nước nóng ổn định. View hồ bơi về đêm rất thư giãn. Đồ ăn ngon và phục vụ nhanh.',
  },
  {
    id: 4,
    name: 'Lê Hoàng Mai',
    avatar:
      'https://ui-avatars.com/api/?name=Le+Hoang+Mai&background=FF9800&color=fff',
    email: 'hoangmai01@gmail.com',
    commends:
      'Không gian phòng nghỉ sáng sủa, nội thất đẹp và mới. Phòng tắm sạch bóng, khăn và đồ dùng thay hằng ngày. View thành phố buổi tối lung linh. Đồ ăn chuẩn vị.',
  },
  {
    id: 5,
    name: 'Đỗ Đức Tài',
    avatar:
      'https://ui-avatars.com/api/?name=Do+Duc+Tai&background=9C27B0&color=fff',
    email: 'ductai94@gmail.com',
    commends:
      'Hải sản tươi, salad ngon, bữa tối ăn tại khách sạn rất đáng thử. Phòng yên tĩnh và cách âm tốt. Phòng tắm có mùi tinh dầu nhẹ rất dễ chịu. View biển nhìn cực đã.',
  },
  {
    id: 6,
    name: 'Võ Ngọc Linh',
    avatar:
      'https://ui-avatars.com/api/?name=Vo+Ngoc+Linh&background=F44336&color=fff',
    email: 'ngoclinh07@gmail.com',
    commends:
      'Phòng nghỉ được trang trí đơn giản nhưng tinh tế. Đồ ăn chất lượng, không bị quá mặn hay quá dầu. Phòng tắm và lavabo rất sạch. View từ hồ bơi vô cực rất đẹp.',
  },
  {
    id: 7,
    name: 'Phan Gia Bảo',
    avatar:
      'https://ui-avatars.com/api/?name=Phan+Gia+Bao&background=009688&color=fff',
    email: 'giabao99@gmail.com',
    commends:
      'Bữa sáng phong phú và phục vụ chu đáo. Phòng nghỉ ấm cúng, giường mềm vừa phải. Phòng tắm rộng và có bồn tắm thoải mái. View hướng biển quá tuyệt.',
  },
  {
    id: 8,
    name: 'Huỳnh Minh Ngọc',
    avatar:
      'https://ui-avatars.com/api/?name=Huynh+Minh+Ngoc&background=795548&color=fff',
    email: 'minhngoc96@gmail.com',
    commends:
      'Phòng rất thơm và tinh tế. Đồ ăn ngon và trình bày đẹp. Phòng tắm sạch và hiện đại. View ban công rất chill, phù hợp uống trà chiều.',
  },
  {
    id: 9,
    name: 'Ngô Văn Nam',
    avatar:
      'https://ui-avatars.com/api/?name=Ngo+Van+Nam&background=607D8B&color=fff',
    email: 'vannam93@gmail.com',
    commends:
      'Tôi thích nhất là buffet sáng vì món nào cũng ngon. Phòng nghỉ đầy đủ tiện nghi. Phòng tắm sạch sẽ, vòi sen mạnh và êm. View đẹp.',
  },
  {
    id: 10,
    name: 'Bùi Thị Mỹ Duyên',
    avatar:
      'https://ui-avatars.com/api/?name=Bui+Thi+My+Duyen&background=3F51B5&color=fff',
    email: 'myduyen05@gmail.com',
    commends:
      'Phòng nghỉ trang nhã, không bị ám mùi. Đồ ăn có nhiều lựa chọn, phù hợp cả người ăn kiêng. Phòng tắm thoáng và sạch. View thành phố rất đẹp về đêm.',
  },
  {
    id: 11,
    name: 'Trịnh Thanh Hùng',
    avatar:
      'https://ui-avatars.com/api/?name=Trinh+Thanh+Hung&background=00BCD4&color=fff',
    email: 'thanhhung92@gmail.com',
    commends:
      'Phòng thoáng mát và dọn dẹp kỹ lưỡng. Đồ ăn ngon và không bị ngấy. Phòng tắm có bồn tắm rộng. View từ tầng cao nhìn rất thích.',
  },
  {
    id: 12,
    name: 'Nguyễn Phương Anh',
    avatar:
      'https://ui-avatars.com/api/?name=Nguyen+Phuong+Anh&background=8BC34A&color=fff',
    email: 'phuongan00@gmail.com',
    commends:
      'Tôi rất thích phong cách thiết kế của phòng. Phòng tắm sáng và sạch. Đồ ăn hấp dẫn, salad và bánh rất ngon. View hồ bơi chill.',
  },
  {
    id: 13,
    name: 'Lâm Tuấn Kiệt',
    avatar:
      'https://ui-avatars.com/api/?name=Lam+Tuan+Kiet&background=CDDC39&color=333',
    email: 'tuankiet98@gmail.com',
    commends:
      'Phòng rộng và thoải mái. Đồ ăn tươi, nhất là hải sản. Phòng tắm sạch sẽ không có mùi. View biển siêu đỉnh.',
  },
  {
    id: 14,
    name: 'Mai Ngọc Thảo',
    avatar:
      'https://ui-avatars.com/api/?name=Mai+Ngoc+Thao&background=FFC107&color=333',
    email: 'ngocthao06@gmail.com',
    commends:
      'Phòng nghỉ êm và dễ chịu. Đồ ăn ngon và được thay đổi mỗi ngày. Phòng tắm sạch, khăn thơm. View thoáng và đẹp.',
  },
  {
    id: 15,
    name: 'Hoàng Trần Bảo',
    avatar:
      'https://ui-avatars.com/api/?name=Hoang+Tran+Bao&background=FF5722&color=fff',
    email: 'tranbao95@gmail.com',
    commends:
      'Tôi đánh giá rất cao chất lượng đồ ăn. Phòng thoải mái, giường ngủ tốt. Phòng tắm vệ sinh kỹ và sáng. View đặc biệt đẹp lúc hoàng hôn.',
  },
  {
    id: 16,
    name: 'Đào Hương Giang',
    avatar:
      'https://ui-avatars.com/api/?name=Dao+Huong+Giang&background=673AB7&color=fff',
    email: 'huonggiang02@gmail.com',
    commends:
      'Không gian dễ chịu và sang trọng. Đồ ăn ngon, đồ tráng miệng xuất sắc. Phòng tắm sạch và gọn. View ban công chụp ảnh rất đẹp.',
  },
  {
    id: 17,
    name: 'Lý Văn Phú',
    avatar:
      'https://ui-avatars.com/api/?name=Ly+Van+Phu&background=2196F3&color=fff',
    email: 'vanphu90@gmail.com',
    commends:
      'Phòng nghỉ yên tĩnh. Đồ ăn được nêm vừa miệng. Phòng tắm sạch và tiện nghi. View nhìn thẳng ra biển, rất đáng trải nghiệm.',
  },
  {
    id: 18,
    name: 'Tô Bảo Trang',
    avatar:
      'https://ui-avatars.com/api/?name=To+Bao+Trang&background=E91E63&color=fff',
    email: 'baotrang01@gmail.com',
    commends:
      'Phòng đẹp và sáng sủa. Đồ ăn nấu chuẩn, nóng và tươi. Phòng tắm thoáng và không bị bí. View đẹp và chill.',
  },
  {
    id: 19,
    name: 'Trương Gia Minh',
    avatar:
      'https://ui-avatars.com/api/?name=Truong+Gia+Minh&background=4CAF50&color=fff',
    email: 'giaminh94@gmail.com',
    commends:
      'Đồ ăn chất lượng và phục vụ nhanh. Phòng ngủ thoáng, nệm êm. Phòng tắm sạch sẽ. View thành phố cực kỳ lung linh.',
  },
  {
    id: 20,
    name: 'Châu Khánh Vy',
    avatar:
      'https://ui-avatars.com/api/?name=Chau+Khanh+Vy&background=FF9800&color=fff',
    email: 'khanhvy03@gmail.com',
    commends:
      'Tôi đặc biệt thích phần bữa sáng và view hồ bơi. Phòng rất sạch và thơm. Phòng tắm hiện đại. View cực kỳ hợp sống ảo.',
  },
];
