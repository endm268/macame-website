export default function NotFound() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-7xl font-bold text-myColorRed-activeRed">404</h1>
        <p className="text-xl text-gray-600 mt-2">الصفحة غير موجودة</p>
        <p className="text-md text-gray-500 mt-4">
          يبدو أنك وصلت إلى صفحة غير موجودة، يمكنك العودة إلى الصفحة الرئيسية.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-myColorRed-darkRed text-white rounded-lg hover:bg-myColorRed-activeRed transition"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    );
  }
  