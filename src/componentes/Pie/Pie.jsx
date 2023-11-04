export default function Pie() {
  const date = new Date();

  return (
    <div className="row border-top mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <div className="col-md-4 d-flex align-items-center">
          <p className="mb-3 mb-md-0">©{date.getFullYear()} SPBT2</p>
        </div>
      </footer>
    </div>
  )
}