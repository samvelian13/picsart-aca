// Activity selection problem - Greedy

// finish is sorted
import MinPriorityQueue from "../DS/Heap/MinPriorityQueue.js";

function activitySelection(activities) {
    activities.sort((a, b) => a.finish - b.finish);

    let count = 1
    let lastSelected = 0

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= activities[lastSelected].finish) {
            count++;
            lastSelected = i;
        }
    }

    return count;
}

function activitySelectionPQ(activities) {
    const pq = new MinPriorityQueue()
    let count = 0
    let currentFinishTime = -1;

    activities.forEach(activity => pq.insert(activity.finish, activity));

    while (!pq.isEmpty()) {
        const {val: currentActivity} = pq.extractMin()
        if (currentActivity.start >= currentFinishTime) {
            count++;

            currentFinishTime = currentActivity.finish
        }
    }

    return count;
}

const activities = [
    {start: 2, finish: 5},
    {start: 6, finish: 9},
    {start: 1, finish: 3},
    {start: 5, finish: 9},
    {start: 8, finish: 10},
    {start: 3, finish: 7},
];
console.log(activitySelectionPQ(activities));