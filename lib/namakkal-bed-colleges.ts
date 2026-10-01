// GL6-373, added 2026-10-01. The B.Ed colleges of Namakkal district as Tamil Nadu Teachers
// Education University lists them: https://www.tnteu.ac.in/affiliated_colleges.php
// (district = Namakkal, course = B.Ed), read 2026-10-01. 32 colleges, combined intake 3,500.
// Raw rows are kept in the SEO project: artefacts/keywords/tnteu-namakkal-bed-list-2026-10-01.json
//
// `code` and `intake` are copied exactly. `area` is a short locality taken from the address
// TNTEU prints - nothing is added that TNTEU does not say. By the user's decision 2026-10-01:
//  - no links, ratings, fees or rankings for any other college;
//  - our own row carries the brand name "JKKN College of Education" and the campus address the
//    site uses (Natarajapuram, Komarapalayam). TNTEU's record for code 36108 shows an older
//    address (Ethimedu Village, Tiruchengode Taluk, 637 018); the user confirmed the site address
//    is correct.
// Re-read the TNTEU page before every admission season; the list changes.

export interface NamakkalBedCollege {
  code: string;
  name: string;
  area: string;
  intake: number;
  isJkkn?: boolean;
}

export const TNTEU_LIST_URL = 'https://www.tnteu.ac.in/affiliated_colleges.php';
export const TNTEU_LIST_READ_ON = '1 October 2026';

export const namakkalBedColleges: NamakkalBedCollege[] = [
  { code: '36101', name: 'Angels College of Education', area: 'Aniyapuram', intake: 50 },
  { code: '36102', name: 'Annai Mathammal Sheela College of Education', area: 'Erumapatty', intake: 100 },
  { code: '36103', name: 'Chandra Chellappan College of Education', area: 'Sellappampatty, Namakkal Taluk', intake: 100 },
  { code: '36104', name: 'Dharma Vidyaalaya College of Education', area: 'Kolli Hills', intake: 100 },
  { code: '36105', name: 'Excel College of Education', area: 'Pallakapalayam', intake: 200 },
  { code: '36106', name: 'Gnanamani College of Education', area: 'Pachal', intake: 200 },
  { code: '36107', name: 'Government College of Education', area: 'Komarapalayam', intake: 100 },
  { code: '36108', name: 'JKKN College of Education', area: 'Natarajapuram, Komarapalayam', intake: 100, isJkkn: true },
  { code: '36109', name: 'Kalaimagal College of Education', area: 'Namagiripet, Rasipuram Taluk', intake: 50 },
  { code: '36110', name: 'Kamarajar College of Education', area: 'Selappampatty, Namakkal Taluk', intake: 100 },
  { code: '36111', name: 'Kandhaswamy College of Education', area: 'Sankari West, Komarapalayam Taluk', intake: 100 },
  { code: '36113', name: 'Krishnasree College of Education', area: 'Elayampalayam, Tiruchengode', intake: 100 },
  { code: '36114', name: 'Krishna College of Education for Women', area: 'Elayampalayam, Tiruchengode Taluk', intake: 100 },
  { code: '36115', name: 'KRP College of Education', area: 'Pachampalayam, Sankari West', intake: 100 },
  { code: '36116', name: 'K.S. Maniam College of Education', area: 'Paramathi Velur Taluk', intake: 100 },
  { code: '36117', name: 'KSR College of Education', area: 'Tiruchengode', intake: 200 },
  { code: '36118', name: 'Mahendhira College of Education', area: 'Kalipatti, Tiruchengode Taluk', intake: 100 },
  { code: '36119', name: 'Mahendra College of Education', area: 'Kumaramangalam, Tiruchengode Taluk', intake: 100 },
  { code: '36120', name: 'M. Shanthi College of Education', area: 'Ernapuram', intake: 100 },
  { code: '36121', name: 'Muthayammal College of Education', area: 'Kakkaveri, Rasipuram', intake: 100 },
  { code: '36122', name: 'Paavai College of Education', area: 'Pachal', intake: 100 },
  { code: '36123', name: 'PGP College of Education', area: 'Villipalayam, Namakkal-Karur Road', intake: 200 },
  { code: '36124', name: 'Rainbow College of Education', area: 'Puduchatram', intake: 100 },
  { code: '36125', name: 'Rajapalayam Deivanaiammal College of Education', area: 'Kalangani', intake: 100 },
  { code: '36126', name: 'Shri Vidhya Mandhir College of Education', area: 'Gurusamipalayam, Rasipuram Taluk', intake: 50 },
  { code: '36127', name: 'Sri Amirtha College of Education', area: 'Pappinaikkenpatti', intake: 100 },
  { code: '36128', name: 'Sri Rengeswarer College of Education', area: 'Pottireddipatti', intake: 100 },
  { code: '36129', name: 'Sri Vengalamani Amman College of Education', area: 'N. Pudupatti, Trichy Main Road', intake: 50 },
  { code: '36130', name: 'Sri Vidya Mandir College of Education', area: 'Rasipuram', intake: 50 },
  { code: '36131', name: 'Star College of Education', area: 'Periyanahalli, Tiruchengode Taluk', intake: 50 },
  { code: '36132', name: 'Vidhayaa Vikas College of Education', area: 'Andipalayam, Tiruchengode Taluk', intake: 200 },
  { code: '36133', name: 'Vivekanandha College of Education for Women', area: 'Elampalayam, Tiruchengode', intake: 200 },
];
