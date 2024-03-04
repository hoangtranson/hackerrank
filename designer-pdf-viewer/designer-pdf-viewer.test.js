const designerPdfViewer = require('./designer-pdf-viewer');

describe('designerPdfViewer()', () => {
    test('Test case 1', () => {
        expect(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 1, 1, 1, 3, 1, 4, 1, 3, 3, 3, 1, 5, 1, 3, 1, 5], 'abc')).toBe(9);
    });
    
    test('Test case 2', () => {
        expect(designerPdfViewer([1,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')).toBe(28);
    });
});