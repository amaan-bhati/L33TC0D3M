function findElementsThatAppearMoreThanNBy3Times(nums) {
  const candidates = [];
  let count1 = 0;
  let count2 = 0;
  let first;
  let second;

  // Find two candidates.
  for (const num of nums) {
    if (num === first) {
      count1++;
    } else if (num === second) {
      count2++;
    } else if (count1 === 0) {
      first = num;
      count1 = 1;
    } else if (count2 === 0) {
      second = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Check if the two candidates appear more than ⌊ n/3 ⌋ times.
  candidates.push(first);
  if (second !== first) {
    candidates.push(second);
  }

  const result = [];
  for (const candidate of candidates) {
    let count = 0;
    for (const num of nums) {
      if (num === candidate) {
        count++;
      }
    }
    if (count > nums.length / 3) {
      result.push(candidate);
    }
  }

  return result;
}
