//Fibonacci with memoization

const fib = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

//gridTraveler
//time: O(2^m+n) -> O(m*n)
//space O(m+n)

const gridTraveler = (m, n, memo = {}) => {
	const key = m + ',' + n;
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
	return memo[key];
};

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 4));
console.log(gridTraveler(1, 2));
console.log(gridTraveler(18, 18));

//  canSum
//  time: O(n^m) -> O(m*n)
//  space: O(m)

const canSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;
	for (let num of numbers) {
		const remainder = targetSum - num;
		if (canSum(remainder, numbers, memo) === true) {
			memo[targetSum] = true;
			return true;
		}
	}
	memo[targetSum] = false;
	return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [5, 2, 3, 6]));
console.log(canSum(300, [7, 14]));

//  howSum
//  time: O(n^m 8 m) -> O(m*n^2)
//  space: O(m) -> O(m^2)

const howSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;
	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[targetSum] = [...remainderResult, num];
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [5, 2, 3, 6]));
console.log(howSum(300, [7, 14]));

//  bestSum
//  time: O(n^m * m) -> O(n *m^2)
//  space: O(m^2) -> O(m^2)

const bestSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSum(remainder, numbers, memo);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}
	memo[targetSum] = shortestCombination;
	return shortestCombination;
};

console.log(bestSum(7, [5, 4, 7, 3]));
console.log(bestSum(8, [5, 3, 2]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

//  canConstruct
//  time: O(n^m) -> O(n * m^2)
// space: O(m^2)

const canConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}
	memo[target] = false;
	return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
	canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
		'e',
		'ee',
		'eee',
		'eeee',
		'eeeee'
	])
);

//  countConstruct
//  time: O(n^m) -> O(n * m^2)
// space: O(m^2)
