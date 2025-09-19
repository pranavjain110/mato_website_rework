function Infrastructure() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Infrastructure</h1>
        <p className="text-lg text-gray-600 mb-4">
          Our state-of-the-art equipment and facilities
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Casting Equipment</h3>
            <p className="text-gray-600">Sand Casting, Gravity Die Casting</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Machining Centers</h3>
            <p className="text-gray-600">VMC, CNC Lathe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
            <p className="text-gray-600">CMM, Contracer, Spectrometer, SPC Edge software</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure