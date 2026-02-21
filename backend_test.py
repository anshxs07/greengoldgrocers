#!/usr/bin/env python3

import requests
import sys
from datetime import datetime
import json

class GreenGoldAPITester:
    def __init__(self, base_url="https://organic-grocers-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    print(f"Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")
                self.failed_tests.append({
                    "test": name,
                    "endpoint": endpoint,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text
                })

            return success, response.json() if response.content and response.headers.get('content-type', '').startswith('application/json') else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.failed_tests.append({
                "test": name,
                "endpoint": endpoint,
                "error": "Request timeout"
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "endpoint": endpoint,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "api/", 200)

    def test_status_endpoint_get(self):
        """Test GET status endpoint"""
        return self.run_test("Get Status", "GET", "api/status", 200)

    def test_status_endpoint_post(self):
        """Test POST status endpoint"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        return self.run_test("Create Status", "POST", "api/status", 200, test_data)

    def test_enquiry_endpoint(self):
        """Test enquiry form submission"""
        test_data = {
            "name": "John Doe Test",
            "email": "test@example.com",
            "phone": "9876543210",
            "message": "This is a test enquiry from automated testing."
        }
        return self.run_test("Submit Enquiry", "POST", "api/enquiry", 200, test_data)

    def test_enquiry_validation(self):
        """Test enquiry form validation with invalid data"""
        test_data = {
            "name": "",
            "email": "invalid-email",
            "phone": "123",
            "message": ""
        }
        success, response = self.run_test("Enquiry Validation", "POST", "api/enquiry", 422, test_data)
        return success

def main():
    print("🧪 Starting GreenGold Grocers API Testing...")
    print("=" * 60)
    
    tester = GreenGoldAPITester()

    # Test all endpoints
    tester.test_root_endpoint()
    tester.test_status_endpoint_get()
    tester.test_status_endpoint_post()
    tester.test_enquiry_endpoint()
    tester.test_enquiry_validation()

    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for test in tester.failed_tests:
            print(f"  - {test['test']}: {test.get('error', f'Expected {test.get(\"expected\")}, got {test.get(\"actual\")}')}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())