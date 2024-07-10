import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./footer.css";
class HomeFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: []
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {
    // Giả sử đây là logic tìm kiếm của bạn, bạn có thể thay thế bằng logic thực tế
    const results = [
      "Kết quả 1 cho " + this.state.searchQuery,
      "Kết quả 2 cho " + this.state.searchQuery,
      "Kết quả 3 cho " + this.state.searchQuery
    ];
    this.setState({ searchResults: results });
  };
  render() {
    return (
      <div className="home-footer">
        <footer class="footer-distributed">

          <div class="footer-left">

            <h3>Hoàng<span>Long</span></h3>

            <p class="footer-links">
              <a href="#" class="link-1">Trang Chủ</a>

              <a href="#">Blog</a>

              <a href="#">Báo Giá</a>

              <a href="#">Về chúng tôi</a>

              <a href="#">Faq</a>

              <a href="#">Liên hệ</a>
            </p>

            <p class="footer-company-name">Hoàng Long © 2015</p>
          </div>

          <div class="footer-center">

            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>38 Nhân Chính, Thanh Xuân</span> Hà Nội</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+092387623123</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">support@hoanglong.com</a></p>
            </div>

          </div>

          <div class="footer-right">

            <p class="footer-company-about">
              <span>Về chúng tôi Virtual Machine 1</span>
              Với 27 năm hình thành và phát triển, Bệnh viện Đại học Y Dược TPHCM là địa chỉ chăm sóc sức khỏe uy tín của hàng triệu người bệnh.
            </p>
            <label htmlFor="gsearch">Search Google:</label>
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleSearch}>Search</button>
            <div className="search-results">
              {this.state.searchResults.map((result, index) => (
                <p key={index}>{result}</p>
              ))}
            </div>
            <div class="footer-icons">

              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-github"></i></a>

            </div>

          </div>

        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
