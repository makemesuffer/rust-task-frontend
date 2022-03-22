interface IDonationsTable {}

const testData = [
  {
    rank: 1,
    address: '0x1232321',
    amount: '2 sol',
  },
  {
    rank: 2,
    address: '0x1232321',
    amount: '1.5 sol',
  },
  {
    rank: 3,
    address: '0x1232321',
    amount: '1 sol',
  },
  {
    rank: 4,
    address: '0x1232321',
    amount: '0.5 sol',
  },
];

const DonationsTable: React.FC<IDonationsTable> = () => {
  return (
    <div className="mb-4">
      <div className="text-center p-2 text-2xl">Donations List</div>
      <table className="table table-compact text-center w-11/12 lg:w-8/12 mx-auto">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((donator: any) => {
            return (
              <tr>
                <th>{donator.rank}</th>
                <th>{donator.address}</th>
                <th>{donator.amount}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsTable;
