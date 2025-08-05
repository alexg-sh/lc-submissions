// Last updated: 8/5/2025, 11:19:22 PM
function generate(numRows: number): number[][] {

    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let mainList = [];
    let rowList = [];

    for (let i = 1; i <= numRows; i++) {
        if ( i == 1 ) {
            mainList.push( [1] );
        } else if ( i == 2 ) {
            mainList.push( [1, 1] );
            
        } else if ( i > 2 ) {

            const prevRow = mainList[i - 2];
            rowList = [1];

            
            for ( let j = 1; j < i - 1; j++ ) {
                const left = prevRow[j - 1] ;
                const right = prevRow[j] ;
                rowList.push( left + right );
            }

            rowList.push(1);

            mainList.push(rowList);
        }
    }

    return mainList;
};