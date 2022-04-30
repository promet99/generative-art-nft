import fs from "fs";
import path from "path";

const owner = [
  {
    token_id: "157",
    owner_of: "0xbd008db3d8704ce124fcd13e448e950b409e07e1",
  },
  {
    token_id: "510",
    owner_of: "0x1d18a3dcd3e50ab3ba67a3d539a8c32a678321a4",
  },
  {
    token_id: "509",
    owner_of: "0xc998f6a5f4c11e89de6fbd83f1fcc2043606aff3",
  },
  {
    token_id: "508",
    owner_of: "0x5e8b33ebd72c7d9f32020174f5e827d796a36b44",
  },
  {
    token_id: "68",
    owner_of: "0xc2e5b267ba8b2c10a3f88e9a7634e5357477127d",
  },
  {
    token_id: "89",
    owner_of: "0xc2e5b267ba8b2c10a3f88e9a7634e5357477127d",
  },
  {
    token_id: "88",
    owner_of: "0xea7fd0a7e3d878ef3158fc7c6db65d6200ca0099",
  },
  {
    token_id: "133",
    owner_of: "0xcce6f874ea2df612e7d9379a4db311fead207c76",
  },
  {
    token_id: "0",
    owner_of: "0x52f6d4b32e964d0e8e011d823b50ae36972d7df2",
  },
  {
    token_id: "39",
    owner_of: "0xaa37eb2841f4d1c4b283cc21800e2616d669b0b9",
  },
  {
    token_id: "40",
    owner_of: "0xaa37eb2841f4d1c4b283cc21800e2616d669b0b9",
  },
  {
    token_id: "135",
    owner_of: "0xaa37eb2841f4d1c4b283cc21800e2616d669b0b9",
  },
  {
    token_id: "221",
    owner_of: "0x3161ae46e9fca652d13587a3639f561a97023163",
  },
  {
    token_id: "58",
    owner_of: "0xa3ae2dae7274232361bba705750de30c474a5303",
  },
  {
    token_id: "134",
    owner_of: "0xcce6f874ea2df612e7d9379a4db311fead207c76",
  },
  {
    token_id: "11",
    owner_of: "0x7045c9362b6f7aff7d247e4063d8828dbecb72b7",
  },
  {
    token_id: "85",
    owner_of: "0x3523c90c3267120eb5f62312ad70c2e9d41e37de",
  },
  {
    token_id: "84",
    owner_of: "0x3523c90c3267120eb5f62312ad70c2e9d41e37de",
  },
  {
    token_id: "122",
    owner_of: "0xbe0536665a5fa2d6162bcf81b4ebaaa8d0ef0e6d",
  },
  {
    token_id: "91",
    owner_of: "0xbe0536665a5fa2d6162bcf81b4ebaaa8d0ef0e6d",
  },
  {
    token_id: "507",
    owner_of: "0x9c764c7160b94086d0e71f0d47aecaba3dcd44fd",
  },
  {
    token_id: "205",
    owner_of: "0x35ee14de1db74aeab55af207389039d86760e3e5",
  },
  {
    token_id: "506",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "505",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "504",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "503",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "502",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "501",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "500",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "499",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "498",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "497",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "496",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "495",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "494",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "493",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "492",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "491",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "490",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "489",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "488",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "487",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "486",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "485",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "484",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "483",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "482",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "481",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "480",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "479",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "478",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "477",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "476",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "475",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "474",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "473",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "472",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "471",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "470",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "469",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "468",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "467",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "466",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "465",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "464",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "463",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "462",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "461",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "460",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "459",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "458",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "457",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "456",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "455",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "454",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "453",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "452",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "451",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "450",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "449",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "448",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "447",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "446",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "445",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "444",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "443",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "442",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "441",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "440",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "439",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "438",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "437",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "436",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "435",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "434",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "433",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "432",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "431",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "430",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "429",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "428",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "427",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "426",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "425",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "424",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "423",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "422",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "421",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "420",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "419",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "418",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "417",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "416",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "415",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "414",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "413",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "412",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "411",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "410",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "409",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "408",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "407",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "406",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "405",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "404",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "403",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "402",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "401",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "400",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "399",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "398",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "397",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "396",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "395",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "394",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "393",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "392",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "391",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "390",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "389",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "388",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "387",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "386",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "385",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "384",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "383",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "382",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "381",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "380",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "379",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "378",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "377",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "376",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "375",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "374",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "373",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "372",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "371",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "370",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "369",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "368",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "367",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "366",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "365",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "364",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "363",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "362",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "361",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "360",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "359",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "358",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "357",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "356",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "355",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "354",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "353",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "352",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "351",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "350",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "349",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "348",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "347",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "346",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "345",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "344",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "343",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "342",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "341",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "340",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "339",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "338",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "337",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "336",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "335",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "334",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "333",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "332",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "331",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "330",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "329",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "328",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "327",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "326",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "325",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "324",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "323",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "322",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "321",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "320",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "319",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "318",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "317",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "316",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "315",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "314",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "313",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "312",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "311",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "310",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "309",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "308",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "307",
    owner_of: "0x0ca25bbde8b66b2bd4bf54e3ff5706eb6092aab7",
  },
  {
    token_id: "176",
    owner_of: "0x6e52c2dffee07d9b528dfda16b6f8384f0db03c1",
  },
  {
    token_id: "206",
    owner_of: "0x93a7ed174568728f014c37c670e145d8fd6e3b67",
  },
  {
    token_id: "298",
    owner_of: "0x8b3aec4f830a76d9b39424810fdf666055a4511a",
  },
  {
    token_id: "299",
    owner_of: "0x3a6ddd959f8c27c7f624f014e36dce8943936caa",
  },
  {
    token_id: "297",
    owner_of: "0x12bdef535d714e38987c7e6970a2940d11adda93",
  },
  {
    token_id: "300",
    owner_of: "0x355669b9f6ae0eaf4ffca1af7342701ef51f9331",
  },
  {
    token_id: "294",
    owner_of: "0xaec2f6109522590b7cfb645235536ad672e2e1ba",
  },
  {
    token_id: "94",
    owner_of: "0xbb3eafff51360e3837d3a21c3def87d06c76fced",
  },
  {
    token_id: "306",
    owner_of: "0xcce6f874ea2df612e7d9379a4db311fead207c76",
  },
  {
    token_id: "44",
    owner_of: "0xd6d11a14c797698714a91f238e2bebda3fb9c7a9",
  },
  {
    token_id: "305",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "24",
    owner_of: "0x6d42ac047cccbf33ab81008f710cd0a68d764870",
  },
  {
    token_id: "304",
    owner_of: "0xd6d11a14c797698714a91f238e2bebda3fb9c7a9",
  },
  {
    token_id: "90",
    owner_of: "0x326466221009502d698a740a99531531c5f0a502",
  },
  {
    token_id: "74",
    owner_of: "0x7fc91748034065d59189c48b1f7b044ac9e76233",
  },
  {
    token_id: "303",
    owner_of: "0x21eea556914d009e39ab0a8bd8d66fe3172bbb71",
  },
  {
    token_id: "302",
    owner_of: "0x024e4fb5632cd32499ce60fe5d892f202e1840c6",
  },
  {
    token_id: "301",
    owner_of: "0x024e4fb5632cd32499ce60fe5d892f202e1840c6",
  },
  {
    token_id: "126",
    owner_of: "0xad6f27c6a8c21d0a6b295374b357b6998097b787",
  },
  {
    token_id: "125",
    owner_of: "0xad6f27c6a8c21d0a6b295374b357b6998097b787",
  },
  {
    token_id: "296",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "23",
    owner_of: "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c",
  },
  {
    token_id: "295",
    owner_of: "0x857197110f3eb2335e44851b173e58d2a68ec3d1",
  },
  {
    token_id: "293",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "292",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "291",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "290",
    owner_of: "0x720b4539bd9815086b28956f095f07d8f625d22d",
  },
  {
    token_id: "289",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "288",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "287",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "286",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "285",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "284",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "283",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "282",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "281",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "280",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "279",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "278",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "277",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "276",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "275",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "274",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "273",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "272",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "271",
    owner_of: "0xe8d463501dd491a4972167944cba001f1deffc0e",
  },
  {
    token_id: "270",
    owner_of: "0xe8d463501dd491a4972167944cba001f1deffc0e",
  },
  {
    token_id: "269",
    owner_of: "0x299db3cb42b7addcb4f79f9d3e5addd9521887df",
  },
  {
    token_id: "268",
    owner_of: "0x1a167b247d4a4d6fed8754893c31d4b3ea69a1f9",
  },
  {
    token_id: "267",
    owner_of: "0xfc0b6d02c586cb0ebd1d22e630e0035b21eee022",
  },
  {
    token_id: "265",
    owner_of: "0xe06e2144a0381b4197f32a1df9dc299cf9113b4b",
  },
  {
    token_id: "266",
    owner_of: "0xe06e2144a0381b4197f32a1df9dc299cf9113b4b",
  },
  {
    token_id: "264",
    owner_of: "0x6e7edc6228334bd42734bded787b89df58da1b37",
  },
  {
    token_id: "263",
    owner_of: "0x6e7edc6228334bd42734bded787b89df58da1b37",
  },
  {
    token_id: "262",
    owner_of: "0x93fc0aa82b6f3b7f9595b2f9ed264a4a8750fc98",
  },
  {
    token_id: "261",
    owner_of: "0x08bc564fafd9a65b45a3cecfed068eb5cefcb7de",
  },
  {
    token_id: "260",
    owner_of: "0xcc92f5ae9f47a4ec9c28a26735d7b2c10c6735b6",
  },
  {
    token_id: "259",
    owner_of: "0x7eadcef730a15df8fd9d663468686114ef7031ac",
  },
  {
    token_id: "258",
    owner_of: "0xc434300cf08981cd9912a7c289ec85384329db86",
  },
  {
    token_id: "257",
    owner_of: "0xb059a84604d74f6404692722f73f630ee9c2dc4d",
  },
  {
    token_id: "256",
    owner_of: "0xb059a84604d74f6404692722f73f630ee9c2dc4d",
  },
  {
    token_id: "255",
    owner_of: "0x5d982cf3328623af175c9fbcb13d3f312eb0f048",
  },
  {
    token_id: "254",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "253",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "252",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "251",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "250",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "249",
    owner_of: "0xc39f4065c8a9e2c897c055ba904ca687a82f51c8",
  },
  {
    token_id: "248",
    owner_of: "0x007bd83c32811ed6562c2e8bcf84e3e9290583c0",
  },
  {
    token_id: "247",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "246",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "245",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "244",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "243",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "242",
    owner_of: "0xbc291e119fdd6cf2c21208db6fa51e8c17862c6e",
  },
  {
    token_id: "241",
    owner_of: "0xdca90e3d38e53d42ad4c540641e4ecc3f16795cc",
  },
  {
    token_id: "240",
    owner_of: "0xdca90e3d38e53d42ad4c540641e4ecc3f16795cc",
  },
  {
    token_id: "239",
    owner_of: "0x335cf26890d4a91b54fec9381a6148b04f73ce40",
  },
  {
    token_id: "238",
    owner_of: "0x2f614bd7de73721d22af26e0861f8e4b3f1594e0",
  },
  {
    token_id: "237",
    owner_of: "0x4537dab37977e3af4a9d0cd354895a4f0de65cdc",
  },
  {
    token_id: "236",
    owner_of: "0xa88c6f21369b42d49e6ffc292ecd613cdb711479",
  },
  {
    token_id: "235",
    owner_of: "0xa88c6f21369b42d49e6ffc292ecd613cdb711479",
  },
  {
    token_id: "234",
    owner_of: "0xc97496df9fe0d0d7fb903e9d6dde21f525fd6f8e",
  },
  {
    token_id: "233",
    owner_of: "0xc264d2220b94533c7870a0eae3aa173d5856f22e",
  },
  {
    token_id: "232",
    owner_of: "0x44d648b32042caa4e4ad40f0fb9db319636c9af8",
  },
  {
    token_id: "231",
    owner_of: "0x44d648b32042caa4e4ad40f0fb9db319636c9af8",
  },
  {
    token_id: "230",
    owner_of: "0x4c1e2ccf2d339102be12807a5aa5d07bbcd338ea",
  },
  {
    token_id: "229",
    owner_of: "0x2e7a3f91f5e2c740398b6466831a12109b9ffa0b",
  },
  {
    token_id: "228",
    owner_of: "0x2e7a3f91f5e2c740398b6466831a12109b9ffa0b",
  },
  {
    token_id: "227",
    owner_of: "0x97933bd949d7a907b355661ef500badaebea45e3",
  },
  {
    token_id: "226",
    owner_of: "0x97933bd949d7a907b355661ef500badaebea45e3",
  },
  {
    token_id: "225",
    owner_of: "0x97933bd949d7a907b355661ef500badaebea45e3",
  },
  {
    token_id: "224",
    owner_of: "0x97933bd949d7a907b355661ef500badaebea45e3",
  },
  {
    token_id: "223",
    owner_of: "0x74a05eb4ab96dd2a3341cd11792f9f615b6a05de",
  },
  {
    token_id: "222",
    owner_of: "0x1cbb13078dbfe69a42f4bb996542c0cf3d819ead",
  },
  {
    token_id: "220",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "219",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "218",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "217",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "216",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "215",
    owner_of: "0x0e799ee1a3c68918a9648747450be8ffe39f9fd3",
  },
  {
    token_id: "214",
    owner_of: "0x0e799ee1a3c68918a9648747450be8ffe39f9fd3",
  },
  {
    token_id: "213",
    owner_of: "0x075c98d458ef572e6c52febd0b3d5213aad0b1c8",
  },
  {
    token_id: "212",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "211",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "210",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "209",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "208",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "207",
    owner_of: "0x36b3717714ac4f771115d21d482afe690aa259d6",
  },
  {
    token_id: "204",
    owner_of: "0x642e415506c224e36bb6a1618e55f53258489f0e",
  },
  {
    token_id: "203",
    owner_of: "0x54aefb053aefb6f3d9dc9db827facdd7f973f017",
  },
  {
    token_id: "202",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "201",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "200",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "199",
    owner_of: "0x6bb4738c9ae09a869658aa81781e810a23f128f5",
  },
  {
    token_id: "198",
    owner_of: "0xf2c06f90fb58844c09220e01e3116a2293df6960",
  },
  {
    token_id: "197",
    owner_of: "0xf2c06f90fb58844c09220e01e3116a2293df6960",
  },
  {
    token_id: "196",
    owner_of: "0xf2c06f90fb58844c09220e01e3116a2293df6960",
  },
  {
    token_id: "195",
    owner_of: "0xf2c06f90fb58844c09220e01e3116a2293df6960",
  },
  {
    token_id: "194",
    owner_of: "0xf2c06f90fb58844c09220e01e3116a2293df6960",
  },
  {
    token_id: "193",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "192",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "191",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "190",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "189",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "188",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "187",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "186",
    owner_of: "0x15574ddaae7aeca28d83264434fd8e6b54620e98",
  },
  {
    token_id: "185",
    owner_of: "0x39eeb91d9e1ef80170a99ad0221bb20a0fef1b8e",
  },
  {
    token_id: "184",
    owner_of: "0x39eeb91d9e1ef80170a99ad0221bb20a0fef1b8e",
  },
  {
    token_id: "183",
    owner_of: "0x39eeb91d9e1ef80170a99ad0221bb20a0fef1b8e",
  },
  {
    token_id: "182",
    owner_of: "0x39eeb91d9e1ef80170a99ad0221bb20a0fef1b8e",
  },
  {
    token_id: "181",
    owner_of: "0x39eeb91d9e1ef80170a99ad0221bb20a0fef1b8e",
  },
  {
    token_id: "180",
    owner_of: "0xea0112da2e751e3110a050fe034bc1a99ed84f26",
  },
  {
    token_id: "179",
    owner_of: "0x17fc0e3107d3f41bbc708b72073c8a812b28ac66",
  },
  {
    token_id: "178",
    owner_of: "0xe26d0c9e35dcc623caffe0ee6329893a42ddb1a5",
  },
  {
    token_id: "177",
    owner_of: "0xe26d0c9e35dcc623caffe0ee6329893a42ddb1a5",
  },
  {
    token_id: "175",
    owner_of: "0xa6daad641a0cb87dc58548d2e7a9571a4f2492e5",
  },
  {
    token_id: "174",
    owner_of: "0x3214ef70ceaea3c0a5807cbbec3dbfa9f2683945",
  },
  {
    token_id: "173",
    owner_of: "0x6ab6ad2a869a96ef743d4542ef2dbbf1602bdbc5",
  },
  {
    token_id: "172",
    owner_of: "0x6ab6ad2a869a96ef743d4542ef2dbbf1602bdbc5",
  },
  {
    token_id: "171",
    owner_of: "0x280cd701fb11ca16a74d688c89f4ed25cfceccd1",
  },
  {
    token_id: "170",
    owner_of: "0x631a83df491ba5738c6e4b8f2e36b5bd57eb5d88",
  },
  {
    token_id: "169",
    owner_of: "0x631a83df491ba5738c6e4b8f2e36b5bd57eb5d88",
  },
  {
    token_id: "168",
    owner_of: "0x0fe699992fd8868f47fd64601ef54a6672ce3fdb",
  },
  {
    token_id: "167",
    owner_of: "0x31e1f33530d963e7d795d81251543552443da486",
  },
  {
    token_id: "166",
    owner_of: "0x5f99fb59d5d88e0912a3476b2c0e489d4defb468",
  },
  {
    token_id: "165",
    owner_of: "0x4537dab37977e3af4a9d0cd354895a4f0de65cdc",
  },
  {
    token_id: "164",
    owner_of: "0x4537dab37977e3af4a9d0cd354895a4f0de65cdc",
  },
  {
    token_id: "163",
    owner_of: "0xc1d423ae49fba66aa713610811d13e0becf213c6",
  },
  {
    token_id: "162",
    owner_of: "0x59be133df2ea4ddcbb9da7fa53d69b71b5ec6cac",
  },
  {
    token_id: "161",
    owner_of: "0xf26ec6b8843a487fd7064b4b95046e60e5c23213",
  },
  {
    token_id: "160",
    owner_of: "0xf26ec6b8843a487fd7064b4b95046e60e5c23213",
  },
  {
    token_id: "159",
    owner_of: "0x03e79a7faefd7f8a99019874d9e94c04ac1d961f",
  },
  {
    token_id: "158",
    owner_of: "0xfe2db8251402553249c193ef16bb71dacfae4666",
  },
  {
    token_id: "156",
    owner_of: "0x286e14ac4cdd4a78fa80780468455e3be6bf5e14",
  },
  {
    token_id: "155",
    owner_of: "0xca7c0d5b3f4e38f83c06f4539d9d6e89cbdee51b",
  },
  {
    token_id: "154",
    owner_of: "0xca7c0d5b3f4e38f83c06f4539d9d6e89cbdee51b",
  },
  {
    token_id: "153",
    owner_of: "0x87140c1759966197f06b675b94db959c75424b92",
  },
  {
    token_id: "152",
    owner_of: "0x87140c1759966197f06b675b94db959c75424b92",
  },
  {
    token_id: "151",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "150",
    owner_of: "0xc4c555df0797530368bd5107ab56434f13a3a750",
  },
  {
    token_id: "149",
    owner_of: "0xf7f60a3998af7cd18aa8a169a08f2a03ef55cb75",
  },
  {
    token_id: "148",
    owner_of: "0xe5bd70e8a312fb78b86d76376957c87ba37507eb",
  },
  {
    token_id: "147",
    owner_of: "0xe5bd70e8a312fb78b86d76376957c87ba37507eb",
  },
  {
    token_id: "146",
    owner_of: "0xd9344a213eab0a9e8f15dd3bbb2fdbdba35be368",
  },
  {
    token_id: "145",
    owner_of: "0xe32af375d8b861e467f78af6de777acd513cdd7d",
  },
  {
    token_id: "144",
    owner_of: "0x93fc0aa82b6f3b7f9595b2f9ed264a4a8750fc98",
  },
  {
    token_id: "143",
    owner_of: "0x93fc0aa82b6f3b7f9595b2f9ed264a4a8750fc98",
  },
  {
    token_id: "142",
    owner_of: "0x45e46e4e4770b0da95d66812afd9e96f8765b030",
  },
  {
    token_id: "141",
    owner_of: "0x9758d27c3e680136e1b2fc43b64b5533b3ade3df",
  },
  {
    token_id: "140",
    owner_of: "0xd704d9ee17c61afb8377731803159bacfd5f1ad5",
  },
  {
    token_id: "139",
    owner_of: "0xd704d9ee17c61afb8377731803159bacfd5f1ad5",
  },
  {
    token_id: "138",
    owner_of: "0xf17b47bbfe77abd1d8a14f76f33a4715aca29f39",
  },
  {
    token_id: "137",
    owner_of: "0x335cf26890d4a91b54fec9381a6148b04f73ce40",
  },
  {
    token_id: "136",
    owner_of: "0x5d8c5b77e87d48407747cfe649c5a4ddf18c2fa4",
  },
  {
    token_id: "132",
    owner_of: "0xc4c555df0797530368bd5107ab56434f13a3a750",
  },
  {
    token_id: "131",
    owner_of: "0x7257a0eb48ffb7ef4e8bbdc2b8082870ced2a654",
  },
  {
    token_id: "130",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "129",
    owner_of: "0x9f4bade2dc684fce4147686edc90687a220cb35a",
  },
  {
    token_id: "128",
    owner_of: "0x9f4bade2dc684fce4147686edc90687a220cb35a",
  },
  {
    token_id: "127",
    owner_of: "0xfd627ab6c1fa6877b57dafd459bd0512f86fbc87",
  },
  {
    token_id: "124",
    owner_of: "0xea7fd0a7e3d878ef3158fc7c6db65d6200ca0099",
  },
  {
    token_id: "123",
    owner_of: "0x9ee619dc24470db54f2541ecc5981b2df0c6c64f",
  },
  {
    token_id: "121",
    owner_of: "0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",
  },
  {
    token_id: "120",
    owner_of: "0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",
  },
  {
    token_id: "119",
    owner_of: "0x2ddd3caf04dd90aaafff9f122c9e797b725160e2",
  },
  {
    token_id: "118",
    owner_of: "0x932a96f2d0c3d2a8de67b9434c50e219a3d014e2",
  },
  {
    token_id: "117",
    owner_of: "0x733babe33ff3cf55192a7ddeb0a57fbe3cf4479d",
  },
  {
    token_id: "116",
    owner_of: "0x2881a58796ec4ffcceb307f0c01ed7b760281e7d",
  },
  {
    token_id: "115",
    owner_of: "0xbfa106ef527a5a527738583aad6cfbcd3304322e",
  },
  {
    token_id: "114",
    owner_of: "0xbfa106ef527a5a527738583aad6cfbcd3304322e",
  },
  {
    token_id: "113",
    owner_of: "0xff8dd1febf8cf74dd96b3e76579ac55c085b536c",
  },
  {
    token_id: "112",
    owner_of: "0xff8dd1febf8cf74dd96b3e76579ac55c085b536c",
  },
  {
    token_id: "111",
    owner_of: "0xaf955a0be88302a2a7fcd40eac11b4988b7da761",
  },
  {
    token_id: "110",
    owner_of: "0x08dabe0a89b7eb13ec7562216594ffd6f22fe32a",
  },
  {
    token_id: "109",
    owner_of: "0x08dabe0a89b7eb13ec7562216594ffd6f22fe32a",
  },
  {
    token_id: "108",
    owner_of: "0x3495f130fa4f24bb97eaba0777a224ebd30d946d",
  },
  {
    token_id: "107",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "106",
    owner_of: "0x3a888e6217eb982344284c3e5bdfac4cb2f05343",
  },
  {
    token_id: "105",
    owner_of: "0x5d982cf3328623af175c9fbcb13d3f312eb0f048",
  },
  {
    token_id: "104",
    owner_of: "0x77dfb4388a065d5e78e9c8695d81985b8aeaf7a9",
  },
  {
    token_id: "103",
    owner_of: "0xcb808d6c815656d5abe68486e74ff3ebee65c93c",
  },
  {
    token_id: "102",
    owner_of: "0x2ef3b2e1830418ff07b8da14c7e965b3371e5421",
  },
  {
    token_id: "101",
    owner_of: "0xd5c26def4e106814ffc623f0b0aab2c396bcaf85",
  },
  {
    token_id: "100",
    owner_of: "0x32b089d8e3c9d1981978d48eecabf910773c5cb0",
  },
  {
    token_id: "99",
    owner_of: "0x32b089d8e3c9d1981978d48eecabf910773c5cb0",
  },
  {
    token_id: "98",
    owner_of: "0xf0e8429e15a3caf4e3c323635b7aae3ee697f8a9",
  },
  {
    token_id: "97",
    owner_of: "0xf0e8429e15a3caf4e3c323635b7aae3ee697f8a9",
  },
  {
    token_id: "96",
    owner_of: "0x6e7edc6228334bd42734bded787b89df58da1b37",
  },
  {
    token_id: "95",
    owner_of: "0x6e7edc6228334bd42734bded787b89df58da1b37",
  },
  {
    token_id: "93",
    owner_of: "0xc9d58c3568c23efe94cd0edb31ac271066153301",
  },
  {
    token_id: "92",
    owner_of: "0x9b440b170fcc4cc4581943351c2e5079296964fd",
  },
  {
    token_id: "87",
    owner_of: "0xa993dae493bb9d645992a21f2eee5af23e822d2a",
  },
  {
    token_id: "86",
    owner_of: "0x0fe699992fd8868f47fd64601ef54a6672ce3fdb",
  },
  {
    token_id: "83",
    owner_of: "0xc7060e0e90d27907cb6e51ef419cec764a77043c",
  },
  {
    token_id: "82",
    owner_of: "0x6cbe546c3502e1ec7be992db2bc49f852de0fdac",
  },
  {
    token_id: "81",
    owner_of: "0xc7060e0e90d27907cb6e51ef419cec764a77043c",
  },
  {
    token_id: "80",
    owner_of: "0x286e14ac4cdd4a78fa80780468455e3be6bf5e14",
  },
  {
    token_id: "79",
    owner_of: "0xeafb2c7e42e1fe01a5c0a03249461275616ba42a",
  },
  {
    token_id: "78",
    owner_of: "0x1088771a0a0da5814f0b9273b46df2454c7264ea",
  },
  {
    token_id: "77",
    owner_of: "0x1088771a0a0da5814f0b9273b46df2454c7264ea",
  },
  {
    token_id: "76",
    owner_of: "0xd14330fb5d0ecc09f133017d43f5e8858d397240",
  },
  {
    token_id: "75",
    owner_of: "0xd14330fb5d0ecc09f133017d43f5e8858d397240",
  },
  {
    token_id: "73",
    owner_of: "0xdca90e3d38e53d42ad4c540641e4ecc3f16795cc",
  },
  {
    token_id: "72",
    owner_of: "0xdca90e3d38e53d42ad4c540641e4ecc3f16795cc",
  },
  {
    token_id: "71",
    owner_of: "0x2e7a3f91f5e2c740398b6466831a12109b9ffa0b",
  },
  {
    token_id: "70",
    owner_of: "0x2e7a3f91f5e2c740398b6466831a12109b9ffa0b",
  },
  {
    token_id: "69",
    owner_of: "0x2dc44bb0f8e48a2fcc12008cb23a2c4c66540a89",
  },
  {
    token_id: "67",
    owner_of: "0x82d8ea73289a60ddb7d630422c4152dc4cc11383",
  },
  {
    token_id: "66",
    owner_of: "0x82d8ea73289a60ddb7d630422c4152dc4cc11383",
  },
  {
    token_id: "65",
    owner_of: "0xf26cf60b00a3c11fcbf1f25f31737f24cbb007d6",
  },
  {
    token_id: "64",
    owner_of: "0xf26cf60b00a3c11fcbf1f25f31737f24cbb007d6",
  },
  {
    token_id: "63",
    owner_of: "0x88af72eb55dd247269b7d9eed08b964c73de57a5",
  },
  {
    token_id: "62",
    owner_of: "0x76e80c8e665670bb4cc42c557a2453e9d67b6d48",
  },
  {
    token_id: "61",
    owner_of: "0x76e80c8e665670bb4cc42c557a2453e9d67b6d48",
  },
  {
    token_id: "60",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "59",
    owner_of: "0xc796eb0821d6993ad3517931887355206a4be9d2",
  },
  {
    token_id: "57",
    owner_of: "0x558de216e6bdaec1820ae9c37ee409acae18d4ee",
  },
  {
    token_id: "56",
    owner_of: "0x49079fa8ee0ceb9a85207c99b87531806591d8c1",
  },
  {
    token_id: "55",
    owner_of: "0x49079fa8ee0ceb9a85207c99b87531806591d8c1",
  },
  {
    token_id: "54",
    owner_of: "0x67aab54e9f81d35b2d9ad7bc3b6505095618aeb0",
  },
  {
    token_id: "53",
    owner_of: "0x67aab54e9f81d35b2d9ad7bc3b6505095618aeb0",
  },
  {
    token_id: "52",
    owner_of: "0x664a8db162c73f280d4f342b33ac3179c4ada6c6",
  },
  {
    token_id: "51",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "50",
    owner_of: "0xf66f3226158e4292a3fb94c626186b147f28741f",
  },
  {
    token_id: "49",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "48",
    owner_of: "0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",
  },
  {
    token_id: "47",
    owner_of: "0x109e27d04761962ed2de82c1b736b8ee4f05b8b0",
  },
  {
    token_id: "46",
    owner_of: "0x59be133df2ea4ddcbb9da7fa53d69b71b5ec6cac",
  },
  {
    token_id: "45",
    owner_of: "0xfe2db8251402553249c193ef16bb71dacfae4666",
  },
  {
    token_id: "43",
    owner_of: "0xff0d4c81a357c9dd0918cadab41cde23d5b8283b",
  },
  {
    token_id: "42",
    owner_of: "0xbd3b7ccd7f58c40dd1150d3487f854f468357d4c",
  },
  {
    token_id: "41",
    owner_of: "0xc6122b467fe2b1ade1aec114d0ff3cd1aa75c746",
  },
  {
    token_id: "38",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "37",
    owner_of: "0x40e37a375e66e19d358b181de175bd2b78a91acb",
  },
  {
    token_id: "36",
    owner_of: "0x5ff80f3880b1540691731bb3c726bcc7a5eeba72",
  },
  {
    token_id: "35",
    owner_of: "0x5ff80f3880b1540691731bb3c726bcc7a5eeba72",
  },
  {
    token_id: "34",
    owner_of: "0x7257a0eb48ffb7ef4e8bbdc2b8082870ced2a654",
  },
  {
    token_id: "33",
    owner_of: "0x2bc5352dc416d1e21f7c6a8595397b0b5ff6107d",
  },
  {
    token_id: "32",
    owner_of: "0xb3339e3f977bfd3fe207493d1334d42181993f17",
  },
  {
    token_id: "31",
    owner_of: "0xa4d1d0060ead119cdf04b7c797a061400c6ba8a7",
  },
  {
    token_id: "30",
    owner_of: "0xa4d1d0060ead119cdf04b7c797a061400c6ba8a7",
  },
  {
    token_id: "29",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "28",
    owner_of: "0x4f3394da9cf0dc7c1662941f18853ef2c4bcd697",
  },
  {
    token_id: "27",
    owner_of: "0x3087d104f4652aaf3472e419b0e6200179f3297a",
  },
  {
    token_id: "26",
    owner_of: "0xd5fb89ba4c7712db4ad17cae4ebc10bb3274c69f",
  },
  {
    token_id: "25",
    owner_of: "0xd5fb89ba4c7712db4ad17cae4ebc10bb3274c69f",
  },
  {
    token_id: "22",
    owner_of: "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c",
  },
  {
    token_id: "21",
    owner_of: "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c",
  },
  {
    token_id: "20",
    owner_of: "0x8e505429b5d48e8f677837a4d9f32827915a29b2",
  },
  {
    token_id: "19",
    owner_of: "0x8e505429b5d48e8f677837a4d9f32827915a29b2",
  },
  {
    token_id: "18",
    owner_of: "0x1c0d733d0fd0ca902ff8d9ac02b2924d41237a1b",
  },
  {
    token_id: "17",
    owner_of: "0x1c0d733d0fd0ca902ff8d9ac02b2924d41237a1b",
  },
  {
    token_id: "16",
    owner_of: "0x54aefb053aefb6f3d9dc9db827facdd7f973f017",
  },
  {
    token_id: "15",
    owner_of: "0x54aefb053aefb6f3d9dc9db827facdd7f973f017",
  },
  {
    token_id: "14",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "13",
    owner_of: "0x9fe053ddc18aa63a632f2d5140fe97d18cc55e1f",
  },
  {
    token_id: "12",
    owner_of: "0x20412b398afbbb09231f7b9f23ca34ebea06e8fb",
  },
  {
    token_id: "10",
    owner_of: "0x4c1e2ccf2d339102be12807a5aa5d07bbcd338ea",
  },
  {
    token_id: "9",
    owner_of: "0x192268a6b20c77d4cfa125d0369a56d515933a32",
  },
  {
    token_id: "8",
    owner_of: "0x192268a6b20c77d4cfa125d0369a56d515933a32",
  },
  {
    token_id: "7",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "6",
    owner_of: "0xae63140d73e4ff7da5f105f9a2489cee71c68a83",
  },
  {
    token_id: "5",
    owner_of: "0x4914897c5a682751b7af740b1d72da1ed52473ff",
  },
  {
    token_id: "4",
    owner_of: "0xfa75a6cecbb49256ba948bfcbaf72f1193a60b67",
  },
  {
    token_id: "3",
    owner_of: "0xfa75a6cecbb49256ba948bfcbaf72f1193a60b67",
  },
  {
    token_id: "2",
    owner_of: "0xb58a0badbfe8300cc18d0861df731678d3bfb27a",
  },
  {
    token_id: "1",
    owner_of: "0x93e5fdef9a056156bbe83b132725fbad77eaf958",
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
  path.join("refinedIdCard2.txt"),
  JSON.stringify(aa).split(",").join("\n"),
  "utf8"
);
