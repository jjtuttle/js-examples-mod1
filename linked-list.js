/** 
 * //! ===============================================
 * 
q = new Queue();
n = 100000

enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
*/

