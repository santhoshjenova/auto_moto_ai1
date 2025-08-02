import streamlit as st

st.set_page_config(
    page_title="AutoMoto AI Platform",
    page_icon="🚗",
    layout="wide",
)

# Sidebar navigation
st.sidebar.title("AutoMoto AI")
menu = st.sidebar.radio(
    "Navigate",
    [
        "Home",
        "Service Module",
        "Sales Module",
        "Finance Module",
        "Insurance Module",
        "Jobs Module",
        "Analytics",
        "About & Team"
    ],
)

# Home Section
if menu == "Home":
    st.title("🚗 AutoMoto AI: Unified Automotive AI Platform")
    st.markdown("""
    Welcome to **AutoMoto AI** – the all-in-one SaaS platform for the global auto industry.
    
    - Predictive maintenance & smart reminders
    - Virtual showroom & personalized offers
    - Automated loan & insurance processing
    - Vertical job board with AI matching
    - Unified customer & business analytics
    
    **One platform – every phase of the automotive lifecycle.**
    """)
    st.image("https://images.unsplash.com/photo-1503736334956-4c8f8e92946d", caption='AutoMoto AI in action', use_column_width=True)

# Service Module
elif menu == "Service Module":
    st.header("Service Module: Predictive Maintenance & Scheduling")
    st.markdown("""
    - AI predicts potential faults from sensor data and usage history.
    - Auto-reminders for scheduled service and document renewals.
    - Digital vehicle history & quick service booking.
    """)
    st.success("Demo: No open faults detected. Next service due in 3,000km.")
    if st.button("Book Service Appointment"):
        st.info("Service booking flow would be launched here.")

# Sales Module
elif menu == "Sales Module":
    st.header("Sales Module: Virtual Showroom & Lead Management")
    st.markdown("""
    - Personalized vehicle recommendations powered by AI.
    - 360° virtual showroom tour and comparison engine.
    - AI-powered lead scoring for dealerships.
    """)
    sample_cars = [
        {"Model": "Honda City", "Price": "$20,000", "Status": "Available"},
        {"Model": "Toyota Corolla", "Price": "$18,000", "Status": "Sold"},
    ]
    st.table(sample_cars)

# Finance Module
elif menu == "Finance Module":
    st.header("Finance Module: Loans and Eligibility")
    st.markdown("""
    - Real-time eligibility checks and instant offers (mocked).
    - Secure document upload with OCR pre-filling.
    - Comparison of partner bank/credit options.
    """)
    score = st.slider("Estimate your credit score (demo)", 300, 900, 700)
    if score > 700:
        st.success("Congratulations! You are pre-approved for up to $30,000 at 5.9% APR.")
    else:
        st.warning("Please provide more information for additional loan options.")

# Insurance Module
elif menu == "Insurance Module":
    st.header("Insurance Module: Quote & Renewals")
    st.markdown("""
    - Instant quote comparison across multiple insurers.
    - AI-matched policy recommendations.
    - Intelligent renewal reminders and embedded upsell.
    """)
    ins_type = st.radio("Insurance Type", ["Comprehensive", "Third-Party", "Zero-Depreciation"])
    st.info(f"Showing best {ins_type} plans for your vehicle.")

# Jobs Module
elif menu == "Jobs Module":
    st.header("Jobs Module: Auto Careers AI Portal")
    st.markdown("""
    - AI-powered job matching for candidates and dealerships.
    - Resume analysis and skill highlighting.
    - Secure messaging and interview scheduling.
    """)
    st.text_input("Search jobs by title or skill")
    st.button("Upload your resume for instant matches")

# Analytics Module
elif menu == "Analytics":
    st.header("Analytics Dashboard")
    st.markdown("""
    - Customer 360 dashboard: engagement, retentio, and value.
    - Dealer analytics: sales funnel, inventory forecasting.
    - AI insights into churn risk and new opportunities.
    """)
    st.line_chart({"users": [100, 200, 350, 500], "dealers": [5, 15, 50, 120]})

# About & Team Section
elif menu == "About & Team":
    st.title("About AutoMoto AI & Founders")
    st.markdown("""
    **Our Vision:**  
    Build the world's most intelligent automotive management platform – just like Salesforce for CRM, Amazon for commerce, and LinkedIn for jobs.

    **Team:**  
    - CEO/Founder: Auto & SaaS expert
    - CTO: AI/Cloud specialist
    - Product, Design, Engineering, Go-to-Market, and Partnerships experts.
    """)
    st.caption("Demo application – not for public distribution (Confidential)")

# Footer/banner
st.markdown("""
---
*AutoMoto AI Platform MVP Demo* | Confidential & Proprietary
""")
