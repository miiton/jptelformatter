// 情報元 = 総務省 http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/shigai_list.html
//
// jptelfmt('0612345678') // -> '06-1234-5678'
// jptelfmt('0312345678') // -> '03-1234-5678'
// jptelfmt('0423456789') // -> '042-345-6789'
// jptelfmt('0422345678') // -> '0422-34-5678'

export const data = [
  { area: 50, city: "BCDE" },
  { area: 60, city: "BCDE" },
  { area: 70, city: "BCDE" },
  { area: 80, city: "BCDE" },
  { area: 90, city: "BCDE" },
  { area: 997, city: "DE" },
  { area: 9969, city: "E" },
  { area: 996, city: "DE" },
  { area: 995, city: "DE" },
  { area: 994, city: "DE" },
  { area: 993, city: "DE" },
  { area: 9913, city: "E" },
  { area: 9912, city: "E" },
  { area: 99, city: "CDE" },
  { area: 987, city: "DE" },
  { area: 986, city: "DE" },
  { area: 985, city: "DE" },
  { area: 984, city: "DE" },
  { area: 983, city: "DE" },
  { area: 982, city: "DE" },
  { area: 9802, city: "E" },
  { area: 980, city: "DE" },
  { area: 98, city: "CDE" },
  { area: 979, city: "DE" },
  { area: 978, city: "DE" },
  { area: 977, city: "DE" },
  { area: 974, city: "DE" },
  { area: 973, city: "DE" },
  { area: 972, city: "DE" },
  { area: 97, city: "CDE" },
  { area: 969, city: "DE" },
  { area: 968, city: "DE" },
  { area: 967, city: "DE" },
  { area: 966, city: "DE" },
  { area: 965, city: "DE" },
  { area: 964, city: "DE" },
  { area: 96, city: "CDE" },
  { area: 959, city: "DE" },
  { area: 957, city: "DE" },
  { area: 956, city: "DE" },
  { area: 955, city: "DE" },
  { area: 954, city: "DE" },
  { area: 952, city: "DE" },
  { area: 950, city: "DE" },
  { area: 95, city: "CDE" },
  { area: 9496, city: "E" },
  { area: 949, city: "DE" },
  { area: 948, city: "DE" },
  { area: 947, city: "DE" },
  { area: 946, city: "DE" },
  { area: 944, city: "DE" },
  { area: 943, city: "DE" },
  { area: 942, city: "DE" },
  { area: 940, city: "DE" },
  { area: 930, city: "DE" },
  { area: 93, city: "CDE" },
  { area: 920, city: "DE" },
  { area: 92, city: "CDE" },
  { area: 898, city: "DE" },
  { area: 897, city: "DE" },
  { area: 896, city: "DE" },
  { area: 895, city: "DE" },
  { area: 894, city: "DE" },
  { area: 893, city: "DE" },
  { area: 892, city: "DE" },
  { area: 89, city: "CDE" },
  { area: 889, city: "DE" },
  { area: 887, city: "DE" },
  { area: 885, city: "DE" },
  { area: 884, city: "DE" },
  { area: 883, city: "DE" },
  { area: 880, city: "DE" },
  { area: 88, city: "CDE" },
  { area: 879, city: "DE" },
  { area: 877, city: "DE" },
  { area: 875, city: "DE" },
  { area: 87, city: "CDE" },
  { area: 869, city: "DE" },
  { area: 868, city: "DE" },
  { area: 867, city: "DE" },
  { area: 866, city: "DE" },
  { area: 865, city: "DE" },
  { area: 863, city: "DE" },
  { area: 86, city: "CDE" },
  { area: 859, city: "DE" },
  { area: 858, city: "DE" },
  { area: 857, city: "DE" },
  { area: 856, city: "DE" },
  { area: 855, city: "DE" },
  { area: 854, city: "DE" },
  { area: 853, city: "DE" },
  { area: 852, city: "DE" },
  { area: 8514, city: "E" },
  { area: 8512, city: "E" },
  { area: 848, city: "DE" },
  { area: 8477, city: "E" },
  { area: 847, city: "DE" },
  { area: 846, city: "DE" },
  { area: 845, city: "DE" },
  { area: 84, city: "CDE" },
  { area: 8396, city: "E" },
  { area: 8388, city: "E" },
  { area: 8387, city: "E" },
  { area: 838, city: "DE" },
  { area: 837, city: "DE" },
  { area: 836, city: "DE" },
  { area: 835, city: "DE" },
  { area: 834, city: "DE" },
  { area: 833, city: "DE" },
  { area: 83, city: "CDE" },
  { area: 829, city: "DE" },
  { area: 827, city: "DE" },
  { area: 826, city: "DE" },
  { area: 824, city: "DE" },
  { area: 823, city: "DE" },
  { area: 820, city: "DE" },
  { area: 82, city: "CDE" },
  { area: 799, city: "DE" },
  { area: 798, city: "DE" },
  { area: 797, city: "DE" },
  { area: 796, city: "DE" },
  { area: 795, city: "DE" },
  { area: 794, city: "DE" },
  { area: 791, city: "DE" },
  { area: 790, city: "DE" },
  { area: 79, city: "CDE" },
  { area: 78, city: "CDE" },
  { area: 779, city: "DE" },
  { area: 778, city: "DE" },
  { area: 776, city: "DE" },
  { area: 774, city: "DE" },
  { area: 773, city: "DE" },
  { area: 772, city: "DE" },
  { area: 771, city: "DE" },
  { area: 770, city: "DE" },
  { area: 77, city: "CDE" },
  { area: 768, city: "DE" },
  { area: 767, city: "DE" },
  { area: 766, city: "DE" },
  { area: 765, city: "DE" },
  { area: 763, city: "DE" },
  { area: 761, city: "DE" },
  { area: 76, city: "CDE" },
  { area: 75, city: "CDE" },
  { area: 749, city: "DE" },
  { area: 748, city: "DE" },
  { area: 747, city: "DE" },
  { area: 7468, city: "E" },
  { area: 746, city: "DE" },
  { area: 745, city: "DE" },
  { area: 744, city: "DE" },
  { area: 743, city: "DE" },
  { area: 742, city: "DE" },
  { area: 740, city: "DE" },
  { area: 739, city: "DE" },
  { area: 738, city: "DE" },
  { area: 737, city: "DE" },
  { area: 736, city: "DE" },
  { area: 735, city: "DE" },
  { area: 73, city: "CDE" },
  { area: 725, city: "DE" },
  { area: 721, city: "DE" },
  { area: 72, city: "CDE" },
  { area: 6, city: "BCDE" },
  { area: 599, city: "DE" },
  { area: 598, city: "DE" },
  { area: 5979, city: "E" },
  { area: 597, city: "DE" },
  { area: 596, city: "DE" },
  { area: 595, city: "DE" },
  { area: 594, city: "DE" },
  { area: 59, city: "CDE" },
  { area: 587, city: "DE" },
  { area: 586, city: "DE" },
  { area: 585, city: "DE" },
  { area: 584, city: "DE" },
  { area: 581, city: "DE" },
  { area: 58, city: "CDE" },
  { area: 578, city: "DE" },
  { area: 577, city: "DE" },
  { area: 5769, city: "E" },
  { area: 576, city: "DE" },
  { area: 575, city: "DE" },
  { area: 574, city: "DE" },
  { area: 573, city: "DE" },
  { area: 572, city: "DE" },
  { area: 569, city: "DE" },
  { area: 568, city: "DE" },
  { area: 567, city: "DE" },
  { area: 566, city: "DE" },
  { area: 565, city: "DE" },
  { area: 564, city: "DE" },
  { area: 563, city: "DE" },
  { area: 562, city: "DE" },
  { area: 561, city: "DE" },
  { area: 558, city: "DE" },
  { area: 557, city: "DE" },
  { area: 556, city: "DE" },
  { area: 555, city: "DE" },
  { area: 554, city: "DE" },
  { area: 553, city: "DE" },
  { area: 551, city: "DE" },
  { area: 550, city: "DE" },
  { area: 55, city: "CDE" },
  { area: 548, city: "DE" },
  { area: 547, city: "DE" },
  { area: 545, city: "DE" },
  { area: 544, city: "DE" },
  { area: 54, city: "CDE" },
  { area: 539, city: "DE" },
  { area: 538, city: "DE" },
  { area: 537, city: "DE" },
  { area: 536, city: "DE" },
  { area: 533, city: "DE" },
  { area: 532, city: "DE" },
  { area: 531, city: "DE" },
  { area: 53, city: "CDE" },
  { area: 52, city: "CDE" },
  { area: 4998, city: "E" },
  { area: 4996, city: "E" },
  { area: 4994, city: "E" },
  { area: 4992, city: "E" },
  { area: 495, city: "DE" },
  { area: 494, city: "DE" },
  { area: 493, city: "DE" },
  { area: 49, city: "CDE" },
  { area: 480, city: "DE" },
  { area: 48, city: "CDE" },
  { area: 479, city: "DE" },
  { area: 478, city: "DE" },
  { area: 476, city: "DE" },
  { area: 475, city: "DE" },
  { area: 470, city: "DE" },
  { area: 47, city: "CDE" },
  { area: 467, city: "DE" },
  { area: 466, city: "DE" },
  { area: 465, city: "DE" },
  { area: 463, city: "DE" },
  { area: 460, city: "DE" },
  { area: 46, city: "CDE" },
  { area: 45, city: "CDE" },
  { area: 44, city: "CDE" },
  { area: 439, city: "DE" },
  { area: 438, city: "DE" },
  { area: 436, city: "DE" },
  { area: 43, city: "CDE" },
  { area: 428, city: "DE" },
  { area: 422, city: "DE" },
  { area: 42, city: "CDE" },
  { area: 4, city: "BCDE" },
  { area: 3, city: "BCDE" },
  { area: 299, city: "DE" },
  { area: 297, city: "DE" },
  { area: 296, city: "DE" },
  { area: 295, city: "DE" },
  { area: 294, city: "DE" },
  { area: 293, city: "DE" },
  { area: 291, city: "DE" },
  { area: 29, city: "CDE" },
  { area: 289, city: "DE" },
  { area: 288, city: "DE" },
  { area: 287, city: "DE" },
  { area: 285, city: "DE" },
  { area: 284, city: "DE" },
  { area: 283, city: "DE" },
  { area: 282, city: "DE" },
  { area: 280, city: "DE" },
  { area: 28, city: "CDE" },
  { area: 279, city: "DE" },
  { area: 278, city: "DE" },
  { area: 277, city: "DE" },
  { area: 276, city: "DE" },
  { area: 274, city: "DE" },
  { area: 270, city: "DE" },
  { area: 27, city: "CDE" },
  { area: 269, city: "DE" },
  { area: 268, city: "DE" },
  { area: 267, city: "DE" },
  { area: 266, city: "DE" },
  { area: 265, city: "DE" },
  { area: 264, city: "DE" },
  { area: 263, city: "DE" },
  { area: 261, city: "DE" },
  { area: 260, city: "DE" },
  { area: 26, city: "CDE" },
  { area: 259, city: "DE" },
  { area: 258, city: "DE" },
  { area: 257, city: "DE" },
  { area: 256, city: "DE" },
  { area: 255, city: "DE" },
  { area: 254, city: "DE" },
  { area: 250, city: "DE" },
  { area: 25, city: "CDE" },
  { area: 248, city: "DE" },
  { area: 247, city: "DE" },
  { area: 246, city: "DE" },
  { area: 244, city: "DE" },
  { area: 243, city: "DE" },
  { area: 242, city: "DE" },
  { area: 241, city: "DE" },
  { area: 240, city: "DE" },
  { area: 24, city: "CDE" },
  { area: 238, city: "DE" },
  { area: 237, city: "DE" },
  { area: 235, city: "DE" },
  { area: 234, city: "DE" },
  { area: 233, city: "DE" },
  { area: 23, city: "CDE" },
  { area: 229, city: "DE" },
  { area: 228, city: "DE" },
  { area: 226, city: "DE" },
  { area: 225, city: "DE" },
  { area: 224, city: "DE" },
  { area: 223, city: "DE" },
  { area: 220, city: "DE" },
  { area: 22, city: "CDE" },
  { area: 198, city: "DE" },
  { area: 197, city: "DE" },
  { area: 195, city: "DE" },
  { area: 194, city: "DE" },
  { area: 193, city: "DE" },
  { area: 192, city: "DE" },
  { area: 191, city: "DE" },
  { area: 19, city: "CDE" },
  { area: 187, city: "DE" },
  { area: 186, city: "DE" },
  { area: 185, city: "DE" },
  { area: 184, city: "DE" },
  { area: 183, city: "DE" },
  { area: 182, city: "DE" },
  { area: 18, city: "CDE" },
  { area: 179, city: "DE" },
  { area: 178, city: "DE" },
  { area: 176, city: "DE" },
  { area: 175, city: "DE" },
  { area: 174, city: "DE" },
  { area: 173, city: "DE" },
  { area: 172, city: "DE" },
  { area: 17, city: "CDE" },
  { area: 167, city: "DE" },
  { area: 166, city: "DE" },
  { area: 1658, city: "E" },
  { area: 1656, city: "E" },
  { area: 1655, city: "E" },
  { area: 1654, city: "E" },
  { area: 165, city: "DE" },
  { area: 1648, city: "E" },
  { area: 164, city: "DE" },
  { area: 1635, city: "E" },
  { area: 1634, city: "E" },
  { area: 1632, city: "E" },
  { area: 163, city: "DE" },
  { area: 162, city: "DE" },
  { area: 1587, city: "E" },
  { area: 1586, city: "E" },
  { area: 158, city: "DE" },
  { area: 157, city: "DE" },
  { area: 1564, city: "E" },
  { area: 156, city: "DE" },
  { area: 1558, city: "E" },
  { area: 155, city: "DE" },
  { area: 1547, city: "E" },
  { area: 154, city: "DE" },
  { area: 153, city: "DE" },
  { area: 152, city: "DE" },
  { area: 15, city: "CDE" },
  { area: 1466, city: "E" },
  { area: 146, city: "DE" },
  { area: 1457, city: "E" },
  { area: 1456, city: "E" },
  { area: 145, city: "DE" },
  { area: 144, city: "DE" },
  { area: 143, city: "DE" },
  { area: 142, city: "DE" },
  { area: 1398, city: "E" },
  { area: 1397, city: "E" },
  { area: 1392, city: "E" },
  { area: 139, city: "DE" },
  { area: 138, city: "DE" },
  { area: 1377, city: "E" },
  { area: 1374, city: "E" },
  { area: 1372, city: "E" },
  { area: 137, city: "DE" },
  { area: 136, city: "DE" },
  { area: 135, city: "DE" },
  { area: 134, city: "DE" },
  { area: 133, city: "DE" },
  { area: 1267, city: "E" },
  { area: 126, city: "DE" },
  { area: 125, city: "DE" },
  { area: 124, city: "DE" },
  { area: 123, city: "DE" },
  { area: 11, city: "CDE" }
]
