import { Autocomplete } from '@mantine/core'

function SearchSection() {
  return (
    <Autocomplete
      label="Buscar un establecimiento smert"
      placeholder="Pick one"
      data={[
        {
          value: 'bob@handsome.inc',
          color: 'red',
          email: 'bob@handsome.inc',
          name: 'Bob Handsome'
        },
        {
          value: 'bill@outlook.com',
          color: 'teal',
          email: 'bill@outlook.com',
          name: 'Bill Gates'
        },
        { value: 'amy@wong.cn', color: 'blue', email: 'amy@wong.cn', name: 'Amy Wong' }
      ]}
    />
  )
}

export default SearchSection
