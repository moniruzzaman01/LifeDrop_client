export default function ThemePreview() {
  return (
    <div className="bg-background min-h-screen p-8 space-y-10 text-primary">
      {/* Title */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-primary">
          Blood Donation Theme Preview
        </h1>
        <p className="text-muted">
          This page exists only to preview Tailwind utilities (light / dark).
        </p>
      </section>

      {/* Surfaces */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-default p-6 rounded-xl">
          <h2 className="font-semibold">Surface</h2>
          <p className="text-muted">bg-surface</p>
        </div>

        <div className="bg-card border border-default p-6 rounded-xl">
          <h2 className="font-semibold">Card</h2>
          <p className="text-muted">bg-card</p>
        </div>

        <div className="bg-background border border-default p-6 rounded-xl">
          <h2 className="font-semibold">Background</h2>
          <p className="text-muted">bg-background</p>
        </div>
      </section>

      {/* Text Colors */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Text Colors</h2>
        <p className="text-primary">Primary Text (text-primary)</p>
        <p className="text-muted">Muted Text (text-muted)</p>
        <p className="text-success">Success Text</p>
        <p className="text-warning">Warning Text</p>
        <p className="text-danger">Danger Text</p>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary hover-primary text-white px-5 py-2 rounded-lg">
            Primary (Donate)
          </button>

          <button className="bg-secondary hover-secondary text-white px-5 py-2 rounded-lg">
            Secondary (Admin)
          </button>

          <button className="bg-success text-white px-5 py-2 rounded-lg">
            Success
          </button>

          <button className="bg-warning text-black px-5 py-2 rounded-lg">
            Warning
          </button>

          <button className="bg-danger text-white px-5 py-2 rounded-lg">
            Danger
          </button>
        </div>
      </section>

      {/* Border Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Borders</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-default p-4 rounded-lg">
            Default Border
          </div>

          <div className="border-2 border-default p-4 rounded-lg">
            Thicker Border
          </div>

          <div className="border border-default bg-card p-4 rounded-lg">
            Border + Card
          </div>
        </div>
      </section>

      {/* Status Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-success/20 border border-default p-6 rounded-xl">
          <h3 className="font-semibold text-success">Donation Approved</h3>
          <p className="text-muted">Success state</p>
        </div>

        <div className="bg-warning/20 border border-default p-6 rounded-xl">
          <h3 className="font-semibold text-warning">Pending Request</h3>
          <p className="text-muted">Warning state</p>
        </div>

        <div className="bg-danger/20 border border-default p-6 rounded-xl">
          <h3 className="font-semibold text-danger">Urgent Need</h3>
          <p className="text-muted">Danger state</p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-sm text-muted pt-10 border-t border-default">
        Toggle{" "}
        <code className="px-1 py-0.5 bg-card border border-default rounded">
          .dark
        </code>{" "}
        class on
        <code className="mx-1 px-1 py-0.5 bg-card border border-default rounded">
          &lt;html&gt;
        </code>
        to preview dark mode.
      </section>
    </div>
  );
}
