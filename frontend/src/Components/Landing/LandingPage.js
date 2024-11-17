import React from 'react'
import { useNavigate } from 'react-router-dom';  
import styled from 'styled-components'
import { Button } from '@mui/material'

function LandingPage() {
    const navigate = useNavigate();  // Initialize the useNavigate hook

    // Updated function to navigate directly to the login or signup page
    const navigateToPage = (page) => {
        navigate(`/${page}`);  // Navigate to login or signup page dynamically
    };

    return (
        <LandingStyled>
            <div className="container">
                <div className="content">
                    <h1>TrackEase</h1>
                    <p>Your personal finance tracker, made easy.</p>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigateToPage('login')}  // Use navigateToPage for login
                            className="btn-login"
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigateToPage('signup')}  // Use navigateToPage for signup
                            className="btn-signup"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </LandingStyled>
    )
}

const LandingStyled = styled.div`
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1601466494912-95b522823b65') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Roboto', sans-serif;

    .container {
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        padding: 3rem;
        border-radius: 10px;
        backdrop-filter: blur(4px);
    }

    h1 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }

    .btn-login {
        width: 200px;
        font-size: 1.2rem;
        padding: 1rem;
    }

    .btn-signup {
        width: 200px;
        font-size: 1.2rem;
        padding: 1rem;
    }
`

export default LandingPage
