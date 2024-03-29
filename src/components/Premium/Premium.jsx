import React from 'react';
import pic from '../../assets/images/p.png'
const Premium = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl mt-20">
                <figure><img className='h-[500px]' src={pic} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Premium books !</h2>
                    <p className='text-xl'>Subscribe to get exclusive premium books now </p>
                    <p>Get the Best books update and explore the knowledge </p>
                    <p><span className='text-3xl'>Only 150$ </span>for 3 months</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <footer class="footer p-10 bg-base-200 text-base-content">
                    <nav>
                        <h6 class="footer-title">Services</h6>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 class="footer-title">Company</h6>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 class="footer-title">Legal</h6>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 class="footer-title">Newsletter</h6>
                        <fieldset class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Enter your email address</span>
                            </label>
                            <div class="join">
                                <input type="text" placeholder="username@site.com" class="input input-bordered join-item" />
                                <button class="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>

        </div>
    );
};

export default Premium;