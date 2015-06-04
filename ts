public class Search {

    static int aramayıbitir = 10;//ondan kuck ise ternary yapma

    static boolean Search (int[] A, int deger, int start, int end)
    {
        if (start > end) {
            return false;
        }

        // 
        if (start-end < CUT_OFF) {
            return binarySearch (A, deger, start, end);
        }
        
        // ternary arama .

        // ilk:uce boolduk 
	int mid1 = start + (end-start) / 3;
        
        // ikinci allan:2/3.
	int mid2 = start + 2*(end-start) / 3;

	if (A[mid1] == deger) {
	    return true;
	}
	else if (A[mid2] == deger) {
	    return true;
	}
	else if (deger < A[mid1]) {
	    // birinci alanda ara
	    return ternarySearch (A, value, start, mid1-1);
	}
	else if (deger > A[mid2]) {
	    // 3. bolgede araa
	    return ternarySearch (A, value, mid2+1, end);
	}
	else {
	    // ortada ara
	    return ternarySearch (A, deger, mid1,mid2);
	}
    }

}
