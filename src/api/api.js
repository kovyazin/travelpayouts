export const getHeaderData = () => {
  return fetch('http://localhost:3001/header')
    .then(res => res.json())
    .then(data => data)
}

export const getBonusesData = () => {
  return fetch('http://localhost:3001/bonuses')
    .then(res => res.json())
    .then(data => data)
}
