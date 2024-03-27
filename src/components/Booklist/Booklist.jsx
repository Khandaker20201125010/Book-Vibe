const Booklist = () => {
    return (
        <div>
            <div className='text-center items-center mt-20'>
                <h1 className='text-2xl font-bold'>Books</h1>
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className='bg-green-500 hover:bg-green-500 font-bold text-white '>
                                Short by
                            </summary>
                            <ul class="p-2 bg-base-100 rounded-t-none ">
                                <li><a className='bg-green-500 hover:bg-green-500 text-white'>Link 1</a></li>
                                <li><a className='bg-green-500 hover:bg-green-500 text-white '>Link2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <div role="tablist" class="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>
                    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>
                </div>
            </div>

        </div>
    );
};

export default Booklist;