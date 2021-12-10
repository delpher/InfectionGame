export class MathUtils {

    static dist(x1, x2, y1, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        //return 1 / Q_rsqrt(dx * dx + dy * dy);
        return Math.sqrt(dx * dx + dy * dy);
    }
    

}

function Q_rsqrt(number)
{ 
    var i;
    var x2, y;
    const threehalfs = 1.5;
  
    x2 = number * 0.5;
    y = number;
    var buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = number;
    i =  (new Uint32Array(buf))[0];
    i = (0x5f3759df - (i >> 1)); //What the fuck?
    (new Uint32Array(buf))[0] = i;
    y = (new Float32Array(buf))[0];
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration

    return y;
}