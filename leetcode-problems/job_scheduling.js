class Job {
    constructor(id, deadline, profit) {
        this.id = id
        this.deadline = deadline
        this.profit = profit
    }
}

const job_scheduling = (jobs, t) => {
    const n = jobs.length
    jobs.sort((a, b) => b.profit - a.profit)
    const slot = new Array(t).fill(false)
    const seq = new Array(t);

    for (let i = 0; i < n; i++) {
        for (let j = Math.min(n, jobs[i].deadline) - 1; j >= 0; j--) {
            if (slot[j] === false) {
                slot[j] = true
                seq[j] = jobs[i]
                break
            }
        }
    }

    console.log(seq);
    return seq.reduce((acc, el) => acc += el.profit, 0)
}

const arr = []
arr.push(new Job('a', 2, 100));
arr.push(new Job('b', 1, 20));
arr.push(new Job('c', 2, 40));
arr.push(new Job('d', 1, 80));
arr.push(new Job('e', 3, 60));
console.log(job_scheduling(arr, 3));