/* eslint-disable*/

const { arrayBuffer } = require("stream/consumers")

// @ts-check
const people = [
  {
    age: 20,
    city: "서울",
    pet: "dog",
  },
  {
    age: 30,
    city: "부천",
    pet: "dog",
  },
  {
    age: 24,
    city: "부산",
    pet: ["dog", "cat"],
  },
  {
    age: 25,
    city: "부천",
    pet: "dog",
  },
  {
    age: 40,
    city: "서울",
    pet: "cat",
  },
  {
    age: 29,
    city: "서울",
  },
]

/**
 * 다음 문제를 풀어봅시다.
 *
 * A. 30대 미만이 한 명이라도 사는 모든 도시
 * B. 각 도시별로 개와 고양이를 키우는 사람의 수
 */

function solveA() {
  /** @type {string[]} */
  const cities = []

  for (const person of people) {
    if (person.age < 30) {
      if (!cities.find((city) => person.city === city)) cities.push(person.city)
    }
  }

  return cities
}

function solveAModern() {
  const allCities = people.filter(({ age }) => age < 30).map(({ city }) => city)
  const set = new Set(allCities) //Set은 중복값을 허용하지않는다.

  return Array.from(set) //다시 배열로 만들어준다.
}
console.log("SolveA", solveA())
console.log("solveAModern", solveAModern())

// B. 각 도시별로 개와 고양이를 키우는 사람의 수

/** @typeef {Object.<string,Object<string,number>>} PetOfCities*/

function solveB() {
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person
    if (petOrPets) {
      const petsOfCity = result[city] || {}
      if (typeof petOrPets === "string") {
        const pet = petOrPets

        const origNumPetsOfCity = petsOfCity[pet] || 0

        petsOfCity[pet] = origNumPetsOfCity + 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0

          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }
      result[city] = petsOfCity
    }
  }
  return result
}

/**
 *
 * ["서울","cat"],
 * ["서울 ","dog"],
 * ["부산","dog"]
 */

function solveBModern() {
  return (
    people
      .map(({ pet: petOrPets, city }) => {
        const pets =
          (typeof petOrPets === "string" ? [petOrPets] : petOrPets) || []

        return {
          city,
          pets,
        }
      })
      /**
       * [
       *  [
       *      ["서울","cat"],
       *      ["서울","dog"]
       *  ],
       *  [
       *    ["부산","dog"]
       *  ]
       * ]
       */
      .flatMap(({ city, pets }) => pets.map((pet) => [city, pet]))
      .reduce((/** @type {PetOfCities} */ result, [city, pet]) => {
        if (!city || !pet) {
          return result
        }
        return {
          ...result,
          [city]: {
            ...result[city],
            [pet]: (result[city]?.[pet] || 0) + 1,
          },
        }
      }, {})
  )
}

console.log("SolveB", solveB())
console.log("SolveBModern", solveBModern())
