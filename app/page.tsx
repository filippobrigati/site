export default function Page() {
    return (
        <div className="max-w-xl" style={{ fontWeight: 500 }}>
            <div className="leading-relaxed">
                <p>filippo brigati</p>
                <p>reggio emilia, it</p>
            </div>
            <div className="mt-[2lh]">
                <p className="font-bold">today</p>
                <p className="leading-7">
                    I work as a software developer at <Link title="GAB Tamagnini" link="https://www.gabtamagnini.it/" />, building web applications.
                    I am currently studying <Link title="computer science" link="https://corsi.unibo.it/laurea/InformaticaManagement/index.html" /> at the University of Bologna. In my free time,
                    I love climbing and hiking, and I've recently started training in beach volley.
                </p>
                <p className="leading-7 mt-[1lh]">
                    I made some small project, <Link title="pixie" link="https://github.com/filippobrigati/pixit" /> is one of them.
                </p>
                <p className="font-bold mt-[1lh]">contact</p>
                <p className="flex gap-x-4">
                    <Link title="github" link="https://github.com/filippobrigati" />
                    <Link title="linkedin" link="https://www.linkedin.com/in/filippo-brigati/" />
                </p>
            </div>
        </div>
    )
}

function Link({ title, link }: { title: string, link: string }) {
    return (
        <a href={link} target="_blank" className="underline hover:bg-black hover:text-white">
            {title}
        </a>
    )
}