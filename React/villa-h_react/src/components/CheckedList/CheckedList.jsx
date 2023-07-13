import { ReactComponent as Checked } from '../../assets/img/checked.svg';

const checkedItems = [
  {
    text: 'ATENDIMENTO ON-LINE E PRESENCIAL',
  },
  {
    text: 'AGENDA 2021 ABERTA',
  },
];

const CheckedList = () => (
  // <h1>checkedlist</h1>
  <ul className="checked-list">
    {checkedItems.map((c, index) => (
      <li key={`${c}`[index]}>
        <Checked />
        {c.text}
      </li>
    ))}
  </ul>
);

export default CheckedList;
