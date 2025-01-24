const maxColors: number = 5;
const treeSize: number = 11;


for (let i = 1; i <= treeSize; i++) {
    
    const color = (i - 1) % maxColors + 1;

    
    let row = '';
    for (let j = 0; j < i; j++) {
        row += color + ' ';
    }

    
    console.log(row.trim());
}
