function Products() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Products</h1>
        <p className="text-lg text-gray-600 mb-6">
          High-quality copper alloy components and specialized products
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bronze Bushings</h3>
            <p className="text-gray-600">Precision engineered bronze bushings for various applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Thrust Washers</h3>
            <p className="text-gray-600">High-quality thrust washers for mechanical assemblies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Gun Metal Components</h3>
            <p className="text-gray-600">Specialized gun metal parts for industrial use</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products