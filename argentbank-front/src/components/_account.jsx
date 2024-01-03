import AccountContent from "./_accountContent";

const content = [
  {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
  },
  {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
  },
  {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
  }
];

function Account() {
  return (
    <>
      <h2 class="sr-only">Accounts</h2>
      <div>
        {content.map((item, index) => (
          <AccountContent 
            key={index}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Account;
