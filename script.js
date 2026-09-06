/* ============================================================
   OUTPUT COMPARATOR TOOL
   Compares expected vs. actual output line-by-line and
   highlights differences.
   ============================================================ */

const expectedBox = document.getElementById('expected');
const actualBox   = document.getElementById('actual');
const compareBtn  = document.getElementById('compareBtn');
const clearBtn    = document.getElementById('clearBtn');
const resultsWrap = document.getElementById('resultsWrapper');
const resultsDiv  = document.getElementById('results');
const summaryEl   = document.getElementById('summary');

compareBtn.addEventListener('click', compareOutputs);
clearBtn.addEventListener('click', clearAll);

function compareOutputs() {
    const expectedLines = expectedBox.value.split('\n');
    const actualLines   = actualBox.value.split('\n');

    const maxLines = Math.max(expectedLines.length, actualLines.length);
    let mismatchCount = 0;

    resultsDiv.innerHTML = '';

    for (let i = 0; i < maxLines; i++) {
        const expectedLine = expectedLines[i] ?? '';
        const actualLine   = actualLines[i] ?? '';
        const isMatch      = expectedLine === actualLine;

        if (!isMatch) mismatchCount++;

        const row = document.createElement('div');
        row.className = `line-row ${isMatch ? 'match' : 'diff'}`;

        row.innerHTML = `
            <span class="line-number">${i + 1}</span>
            <span class="line-content expected">${escapeHtml(expectedLine)}</span>
            <span class="line-content actual">${escapeHtml(actualLine)}</span>
        `;

        resultsDiv.appendChild(row);
    }

    resultsWrap.classList.remove('hidden');

    summaryEl.textContent = mismatchCount === 0
        ? `All ${maxLines} lines match.`
        : `${mismatchCount} of ${maxLines} lines differ.`;
}

function clearAll() {
    expectedBox.value = '';
    actualBox.value = '';
    resultsDiv.innerHTML = '';
    resultsWrap.classList.add('hidden');
    summaryEl.textContent = '';
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
