let weight = prompt('nhập cân nặng của bạn ');
let height = prompt('nhập chiều cao của bạn');
let BIM = weight / (height * height);

// if (BIM > 40) {
//     alert('Bạn đang trong tình trạng béo phì cấp độ 3');
// } else if (BIM < 40 && BIM >= 35) {
//     alert('Bạn đang trong tình trạng béo phì cấp độ 2')
// }else if (BIM < 35 && BIM >= 30) {
//     alert('Bạn đang trong tình trạng béo phì cấp độ 1')
// }else if (BIM < 30 && BIM >= 25) {
//     alert('Bạn đang trong tình trạng thừa cân')
// }else if (BIM < 25 && BIM >= 18.5) {
//     alert('Bạn đang trong tình trạng bình thường')
// }else if (BIM < 18.5 && BIM >= 17) {
//     alert('Bạn đang trong tình trạng gầy cấp độ 1')
// }else if (BIM < 17 && BIM >= 16) {
//     alert('Bạn đang trong tình trạng gầy cấp độ 2')
// } else  {
//     alert('Bạn đang trong tình trạng gầy cấp độ 3')
// }

switch (true) {
    case (BIM > 40):
        alert('Bạn đang trong tình trạng béo phì cấp độ 3');
        break;
    case (BIM < 40 && BIM >= 35):
        alert('Bạn đang trong tình trạng béo phì cấp độ 2');
        break;
    case (BIM < 35 && BIM >= 30):
        alert('Bạn đang trong tình trạng béo phì cấp độ 1');
        break;
    case (BIM < 30 && BIM >= 25):
        alert('Bạn đang trong tình trạng thừa cân');
        break;
    case (BIM < 25 && BIM >= 18.5):
        alert('Bạn đang trong tình trạng bình thường');
        break;
    case (BIM < 18.5 && BIM >= 17):
        alert('Bạn đang trong tình trạng gầy cấp độ 1');
        break;
    case (BIM < 17 && BIM >= 16):
        alert('Bạn đang trong tình trạng gầy cấp độ 2');
        break;
    default:
        alert('Bạn đang trong tình trạng gầy cấp độ 3');
}