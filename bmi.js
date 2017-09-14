function tinhBmi(canNang, chieuCao) {
  console.log(typeof canNang);
  console.log(typeof chieuCao);

  console.log(canNang + chieuCao);
  console.log(canNang - chieuCao);

  let ketQua = canNang / (chieuCao * chieuCao);
  console.log(typeof ketQua);
  return ketQua;
}

let ketQua = tinhBmi("60", "1.77");
console.log(ketQua);

// lưu ý : String / || * String   --> Number
// lưu ý : String + String   --> String
// lưu ý : String - String   --> Number
