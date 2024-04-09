function reverse(x) {
    const limit = 2147483648; // 2^31
    let isNegative = x < 0;
    let reversed = 0;

    if (isNegative) {
        x = -x;
    }

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if (reversed > limit) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
}