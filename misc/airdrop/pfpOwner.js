import fs from "fs";
import path from "path";

const owner = [
  {
    token_id: "310",
    owner_of: "0x5e8b33ebd72c7d9f32020174f5e827d796a36b44",
  },
  {
    token_id: "309",
    owner_of: "0x1d18a3dcd3e50ab3ba67a3d539a8c32a678321a4",
  },
  {
    token_id: "137",
    owner_of: "0x5d8c5b77e87d48407747cfe649c5a4ddf18c2fa4",
  },
  {
    token_id: "136",
    owner_of: "0x5ff80f3880b1540691731bb3c726bcc7a5eeba72",
  },
  {
    token_id: "135",
    owner_of: "0x26a22514d3ac0b05e2f4f04df96ef302ba434cbe",
  },
  {
    token_id: "134",
    owner_of: "0x6e52c2dffee07d9b528dfda16b6f8384f0db03c1",
  },
  {
    token_id: "133",
    owner_of: "0xff0d4c81a357c9dd0918cadab41cde23d5b8283b",
  },
  {
    token_id: "131",
    owner_of: "0xa6daad641a0cb87dc58548d2e7a9571a4f2492e5",
  },
  {
    token_id: "132",
    owner_of: "0x17fc0e3107d3f41bbc708b72073c8a812b28ac66",
  },
  {
    token_id: "130",
    owner_of: "0xc7060e0e90d27907cb6e51ef419cec764a77043c",
  },
  {
    token_id: "4",
    owner_of: "0xf34ff560b350fc90e7e85ddc16046a4e1f24dd4e",
  },
  {
    token_id: "308",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "307",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "306",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "305",
    owner_of: "0xcce6f874ea2df612e7d9379a4db311fead207c76",
  },
  {
    token_id: "129",
    owner_of: "0x767dbd81e78a5fb29dcb11192c200f50996fa405",
  },
  {
    token_id: "128",
    owner_of: "0x767dbd81e78a5fb29dcb11192c200f50996fa405",
  },
  {
    token_id: "127",
    owner_of: "0x767dbd81e78a5fb29dcb11192c200f50996fa405",
  },
  {
    token_id: "126",
    owner_of: "0x37dab09e289c047ecfa89a9d3038604a631825ff",
  },
  {
    token_id: "125",
    owner_of: "0x37dab09e289c047ecfa89a9d3038604a631825ff",
  },
  {
    token_id: "124",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "123",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "122",
    owner_of: "0x192268a6b20c77d4cfa125d0369a56d515933a32",
  },
  {
    token_id: "121",
    owner_of: "0x192268a6b20c77d4cfa125d0369a56d515933a32",
  },
  {
    token_id: "120",
    owner_of: "0x13ba0a21791f63de774b6aa4ff2903fef914c385",
  },
  {
    token_id: "119",
    owner_of: "0x13ba0a21791f63de774b6aa4ff2903fef914c385",
  },
  {
    token_id: "118",
    owner_of: "0xc97496df9fe0d0d7fb903e9d6dde21f525fd6f8e",
  },
  {
    token_id: "117",
    owner_of: "0xc97496df9fe0d0d7fb903e9d6dde21f525fd6f8e",
  },
  {
    token_id: "116",
    owner_of: "0x82d8ea73289a60ddb7d630422c4152dc4cc11383",
  },
  {
    token_id: "115",
    owner_of: "0x82d8ea73289a60ddb7d630422c4152dc4cc11383",
  },
  {
    token_id: "114",
    owner_of: "0x9a439a868514a6e4a605a690c931671256af7bb7",
  },
  {
    token_id: "113",
    owner_of: "0x7228709c7185c4c5b0cb2242f8a45c5156e72186",
  },
  {
    token_id: "112",
    owner_of: "0x3fafe6de4fd966e612305c46ebd9ad42d9a33c52",
  },
  {
    token_id: "111",
    owner_of: "0xc09669d45a1d41e8a616a9c04a6e3ad6acb0aa78",
  },
  {
    token_id: "110",
    owner_of: "0xb059a84604d74f6404692722f73f630ee9c2dc4d",
  },
  {
    token_id: "109",
    owner_of: "0x2ef3b2e1830418ff07b8da14c7e965b3371e5421",
  },
  {
    token_id: "108",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "107",
    owner_of: "0x87c0ed119fe43d4b0e1215b91a37c0885c44232a",
  },
  {
    token_id: "106",
    owner_of: "0x120c7d4ca2c778fa01a367c6edff02d05e0fc649",
  },
  {
    token_id: "105",
    owner_of: "0xa8f10b49f929e51ce067fe118e29174c07d38464",
  },
  {
    token_id: "104",
    owner_of: "0xfe2db8251402553249c193ef16bb71dacfae4666",
  },
  {
    token_id: "103",
    owner_of: "0xff0d4c81a357c9dd0918cadab41cde23d5b8283b",
  },
  {
    token_id: "102",
    owner_of: "0x36fdf352c3d19ca6a6b439292132d60e699ea565",
  },
  {
    token_id: "101",
    owner_of: "0x6e52c2dffee07d9b528dfda16b6f8384f0db03c1",
  },
  {
    token_id: "304",
    owner_of: "0xd6d11a14c797698714a91f238e2bebda3fb9c7a9",
  },
  {
    token_id: "303",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "302",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "301",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "0",
    owner_of: "0x52f6d4b32e964d0e8e011d823b50ae36972d7df2",
  },
  {
    token_id: "53",
    owner_of: "0xaa37eb2841f4d1c4b283cc21800e2616d669b0b9",
  },
  {
    token_id: "100",
    owner_of: "0x3523c90c3267120eb5f62312ad70c2e9d41e37de",
  },
  {
    token_id: "6",
    owner_of: "0x9c764c7160b94086d0e71f0d47aecaba3dcd44fd",
  },
  {
    token_id: "99",
    owner_of: "0xaec2f6109522590b7cfb645235536ad672e2e1ba",
  },
  {
    token_id: "8",
    owner_of: "0xbe0536665a5fa2d6162bcf81b4ebaaa8d0ef0e6d",
  },
  {
    token_id: "300",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "299",
    owner_of: "0x2ddd3caf04dd90aaafff9f122c9e797b725160e2",
  },
  {
    token_id: "298",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "297",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "296",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "295",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "294",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "293",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "292",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "291",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "290",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "289",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "288",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "287",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "286",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "285",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "284",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "283",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "282",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "281",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "280",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "279",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "278",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "277",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "276",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "275",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "274",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "273",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "272",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "271",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "270",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "269",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "268",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "267",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "266",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "265",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "264",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "263",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "262",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "261",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "260",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "259",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "258",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "257",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "256",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "255",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "254",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "253",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "252",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "251",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "250",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "249",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "248",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "247",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "246",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "245",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "244",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "243",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "242",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "241",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "240",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "239",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "238",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "237",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "236",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "235",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "234",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "233",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "232",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "231",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "230",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "229",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "228",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "227",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "226",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "225",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "224",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "223",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "222",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "221",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "220",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "219",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "218",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "217",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "216",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "215",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "214",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "213",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "212",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "211",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "210",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "209",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "208",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "207",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "206",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "205",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "204",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "203",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "202",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "201",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "200",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "199",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "198",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "197",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "196",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "195",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "194",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "193",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "192",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "191",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "190",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "189",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "188",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "187",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "186",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "185",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "184",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "183",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "182",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "181",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "180",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "179",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "178",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "177",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "176",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "175",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "174",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "173",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "172",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "171",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "170",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "169",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "168",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "167",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "166",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "165",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "164",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "163",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "162",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "161",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "160",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "159",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "158",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "157",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "156",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "155",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "154",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "153",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "152",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "151",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "150",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "149",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "148",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "147",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "146",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "145",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "144",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "143",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "142",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "141",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "140",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "139",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "138",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
  {
    token_id: "98",
    owner_of: "0x97933bd949d7a907b355661ef500badaebea45e3",
  },
  {
    token_id: "97",
    owner_of: "0x326466221009502d698a740a99531531c5f0a502",
  },
  {
    token_id: "96",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "95",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "94",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "93",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "92",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "91",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "90",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "89",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "79",
    owner_of: "0x664a8db162c73f280d4f342b33ac3179c4ada6c6",
  },
  {
    token_id: "78",
    owner_of: "0x664a8db162c73f280d4f342b33ac3179c4ada6c6",
  },
  {
    token_id: "88",
    owner_of: "0x49079fa8ee0ceb9a85207c99b87531806591d8c1",
  },
  {
    token_id: "87",
    owner_of: "0x720b4539bd9815086b28956f095f07d8f625d22d",
  },
  {
    token_id: "86",
    owner_of: "0x720b4539bd9815086b28956f095f07d8f625d22d",
  },
  {
    token_id: "85",
    owner_of: "0x92a6e24a65ef75741c67701540ed0a5bd5b47720",
  },
  {
    token_id: "84",
    owner_of: "0x299db3cb42b7addcb4f79f9d3e5addd9521887df",
  },
  {
    token_id: "83",
    owner_of: "0x299db3cb42b7addcb4f79f9d3e5addd9521887df",
  },
  {
    token_id: "82",
    owner_of: "0x5d8c5b77e87d48407747cfe649c5a4ddf18c2fa4",
  },
  {
    token_id: "81",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "80",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "77",
    owner_of: "0xd5fb89ba4c7712db4ad17cae4ebc10bb3274c69f",
  },
  {
    token_id: "76",
    owner_of: "0xd5fb89ba4c7712db4ad17cae4ebc10bb3274c69f",
  },
  {
    token_id: "75",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "74",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "73",
    owner_of: "0x2e7a3f91f5e2c740398b6466831a12109b9ffa0b",
  },
  {
    token_id: "72",
    owner_of: "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c",
  },
  {
    token_id: "71",
    owner_of: "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c",
  },
  {
    token_id: "70",
    owner_of: "0xea0112da2e751e3110a050fe034bc1a99ed84f26",
  },
  {
    token_id: "69",
    owner_of: "0x109e27d04761962ed2de82c1b736b8ee4f05b8b0",
  },
  {
    token_id: "68",
    owner_of: "0x6e7edc6228334bd42734bded787b89df58da1b37",
  },
  {
    token_id: "67",
    owner_of: "0x6ab6ad2a869a96ef743d4542ef2dbbf1602bdbc5",
  },
  {
    token_id: "66",
    owner_of: "0x6ab6ad2a869a96ef743d4542ef2dbbf1602bdbc5",
  },
  {
    token_id: "65",
    owner_of: "0x2ef3b2e1830418ff07b8da14c7e965b3371e5421",
  },
  {
    token_id: "64",
    owner_of: "0x44d648b32042caa4e4ad40f0fb9db319636c9af8",
  },
  {
    token_id: "63",
    owner_of: "0x32b089d8e3c9d1981978d48eecabf910773c5cb0",
  },
  {
    token_id: "62",
    owner_of: "0x286e14ac4cdd4a78fa80780468455e3be6bf5e14",
  },
  {
    token_id: "61",
    owner_of: "0x54aefb053aefb6f3d9dc9db827facdd7f973f017",
  },
  {
    token_id: "60",
    owner_of: "0x54aefb053aefb6f3d9dc9db827facdd7f973f017",
  },
  {
    token_id: "59",
    owner_of: "0x02b75515d6b5b0fe49e9b0cb8074d1cc9a19034a",
  },
  {
    token_id: "58",
    owner_of: "0x76e80c8e665670bb4cc42c557a2453e9d67b6d48",
  },
  {
    token_id: "57",
    owner_of: "0x76e80c8e665670bb4cc42c557a2453e9d67b6d48",
  },
  {
    token_id: "56",
    owner_of: "0x9b440b170fcc4cc4581943351c2e5079296964fd",
  },
  {
    token_id: "55",
    owner_of: "0x1fd6f1274afbe571b66d19a8e8e1917a5e370e6e",
  },
  {
    token_id: "54",
    owner_of: "0x733babe33ff3cf55192a7ddeb0a57fbe3cf4479d",
  },
  {
    token_id: "52",
    owner_of: "0xbfa106ef527a5a527738583aad6cfbcd3304322e",
  },
  {
    token_id: "51",
    owner_of: "0xbfa106ef527a5a527738583aad6cfbcd3304322e",
  },
  {
    token_id: "50",
    owner_of: "0x3495f130fa4f24bb97eaba0777a224ebd30d946d",
  },
  {
    token_id: "49",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "48",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "47",
    owner_of: "0xdca90e3d38e53d42ad4c540641e4ecc3f16795cc",
  },
  {
    token_id: "46",
    owner_of: "0xff0d4c81a357c9dd0918cadab41cde23d5b8283b",
  },
  {
    token_id: "45",
    owner_of: "0x31e1f33530d963e7d795d81251543552443da486",
  },
  {
    token_id: "44",
    owner_of: "0x8e505429b5d48e8f677837a4d9f32827915a29b2",
  },
  {
    token_id: "43",
    owner_of: "0x4c1e2ccf2d339102be12807a5aa5d07bbcd338ea",
  },
  {
    token_id: "42",
    owner_of: "0x5b4e28133aab99ee9fc77b649127a6cfacf28793",
  },
  {
    token_id: "41",
    owner_of: "0x5b4e28133aab99ee9fc77b649127a6cfacf28793",
  },
  {
    token_id: "40",
    owner_of: "0x3214ef70ceaea3c0a5807cbbec3dbfa9f2683945",
  },
  {
    token_id: "39",
    owner_of: "0x17fc0e3107d3f41bbc708b72073c8a812b28ac66",
  },
  {
    token_id: "38",
    owner_of: "0x77dfb4388a065d5e78e9c8695d81985b8aeaf7a9",
  },
  {
    token_id: "37",
    owner_of: "0xa4d1d0060ead119cdf04b7c797a061400c6ba8a7",
  },
  {
    token_id: "36",
    owner_of: "0xa4d1d0060ead119cdf04b7c797a061400c6ba8a7",
  },
  {
    token_id: "35",
    owner_of: "0xd704d9ee17c61afb8377731803159bacfd5f1ad5",
  },
  {
    token_id: "34",
    owner_of: "0xd704d9ee17c61afb8377731803159bacfd5f1ad5",
  },
  {
    token_id: "33",
    owner_of: "0xfa75a6cecbb49256ba948bfcbaf72f1193a60b67",
  },
  {
    token_id: "32",
    owner_of: "0xc434300cf08981cd9912a7c289ec85384329db86",
  },
  {
    token_id: "31",
    owner_of: "0xaf955a0be88302a2a7fcd40eac11b4988b7da761",
  },
  {
    token_id: "7",
    owner_of: "0x08dabe0a89b7eb13ec7562216594ffd6f22fe32a",
  },
  {
    token_id: "27",
    owner_of: "0xd1ccf0788f9c452400fd8ebb84987f4e63661f51",
  },
  {
    token_id: "30",
    owner_of: "0xfc0b6d02c586cb0ebd1d22e630e0035b21eee022",
  },
  {
    token_id: "29",
    owner_of: "0xfc0b6d02c586cb0ebd1d22e630e0035b21eee022",
  },
  {
    token_id: "28",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "26",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "25",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "24",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "23",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "22",
    owner_of: "0xd6d11a14c797698714a91f238e2bebda3fb9c7a9",
  },
  {
    token_id: "21",
    owner_of: "0xd6d11a14c797698714a91f238e2bebda3fb9c7a9",
  },
  {
    token_id: "20",
    owner_of: "0x08bc564fafd9a65b45a3cecfed068eb5cefcb7de",
  },
  {
    token_id: "19",
    owner_of: "0x558de216e6bdaec1820ae9c37ee409acae18d4ee",
  },
  {
    token_id: "18",
    owner_of: "0x558de216e6bdaec1820ae9c37ee409acae18d4ee",
  },
  {
    token_id: "17",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "16",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "15",
    owner_of: "0x32b089d8e3c9d1981978d48eecabf910773c5cb0",
  },
  {
    token_id: "14",
    owner_of: "0x1088771a0a0da5814f0b9273b46df2454c7264ea",
  },
  {
    token_id: "13",
    owner_of: "0x1088771a0a0da5814f0b9273b46df2454c7264ea",
  },
  {
    token_id: "12",
    owner_of: "0x82d8ea73289a60ddb7d630422c4152dc4cc11383",
  },
  {
    token_id: "11",
    owner_of: "0xfe2db8251402553249c193ef16bb71dacfae4666",
  },
  {
    token_id: "10",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "9",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "5",
    owner_of: "0xe06e2144a0381b4197f32a1df9dc299cf9113b4b",
  },
  {
    token_id: "1",
    owner_of: "0x93e5fdef9a056156bbe83b132725fbad77eaf958",
  },
  {
    token_id: "2",
    owner_of: "0xb58a0badbfe8300cc18d0861df731678d3bfb27a",
  },
  {
    token_id: "3",
    owner_of: "0x14db0cd960d5fd6b52fe9baf3127f4a5124c0730",
  },
];

const aa = owner.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.owner_of]: (acc[cur.owner_of] || 0) + 1,
  }),
  {}
);
console.log(aa);

fs.writeFileSync(
  path.join("refinedPfp2.txt"),
  JSON.stringify(aa).split(",").join("\n"),
  "utf8"
);
